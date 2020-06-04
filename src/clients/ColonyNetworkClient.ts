import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { BigNumber } from 'ethers/utils';

import {
  ColonyVersion,
  ClientType,
  Network,
  colonyNetworkAddresses,
  REPUTATION_ORACLE_ENDPOINT,
} from '../constants';
// @TODO this _HAS_ to be the newest version _ALWAYS_. Let's try to figure out a way to make sure of this
import { IColonyNetworkFactory } from '../contracts/4/IColonyNetworkFactory';
import { IColonyNetwork } from '../contracts/4/IColonyNetwork';
import {
  abi as tokenAbi,
  bytecode as tokenBytecode,
} from '../contracts/deploy/Token.json';
import getColonyVersionClient from './Colony/ColonyVersionClient';
import getColonyClientV1, { ColonyClientV1 } from './Colony/ColonyClientV1';
import getColonyClientV2, { ColonyClientV2 } from './Colony/ColonyClientV2';
import getColonyClientV3, { ColonyClientV3 } from './Colony/ColonyClientV3';
import getColonyClientV4, { ColonyClientV4 } from './Colony/ColonyClientV4';
import getTokenClient from './TokenClient';
import getOneTxPaymentDeployerClient, {
  ExtendedOneTxPaymentDeployer,
} from './OneTxPaymentDeployerClient';
import getOneTxPaymentClient from './OneTxPaymentClient';

export type AnyColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4;

type NetworkEstimate = IColonyNetwork['estimate'];

interface ExtendedEstimate extends NetworkEstimate {
  deployToken(
    name: string,
    symbol: string,
    decimals?: number,
  ): Promise<BigNumber>;
}

export interface ExtendedIColonyNetwork extends IColonyNetwork {
  clientType: ClientType.NetworkClient;
  network: Network;
  reputationOracleEndpoint: string;

  oneTxPaymentFactoryClient: ExtendedOneTxPaymentDeployer;
  estimate: ExtendedEstimate;

  getColonyClient(addressOrId: string | number): Promise<AnyColonyClient>;
  getMetaColonyClient(): Promise<AnyColonyClient>;
  deployToken(
    name: string,
    symbol: string,
    decimals?: number,
  ): Promise<ContractTransaction>;
}

interface NetworkClientOptions {
  networkAddress?: string;
  oneTxPaymentFactoryAddress?: string;
  reputationOracleEndpoint?: string;
}

const getColonyNetworkClient = (
  network: Network = Network.Mainnet,
  signerOrProvider: Signer | Provider,
  options?: NetworkClientOptions,
): ExtendedIColonyNetwork => {
  const networkAddress =
    options && options.networkAddress
      ? options.networkAddress
      : colonyNetworkAddresses[network];
  if (!networkAddress) {
    throw new Error(
      `Could not get ColonyNetwork address for ${network}. Please specify`,
    );
  }

  const networkClient = IColonyNetworkFactory.connect(
    networkAddress,
    signerOrProvider,
  ) as ExtendedIColonyNetwork;

  networkClient.clientType = ClientType.NetworkClient;
  networkClient.network = network;
  networkClient.reputationOracleEndpoint =
    (options && options.reputationOracleEndpoint) || REPUTATION_ORACLE_ENDPOINT;

  networkClient.oneTxPaymentFactoryClient = getOneTxPaymentDeployerClient(
    network,
    signerOrProvider,
    options && options.oneTxPaymentFactoryAddress,
  );

  networkClient.getColonyClient = async (
    addressOrId: string | number,
  ): Promise<AnyColonyClient> => {
    let colonyAddress: string;
    if (typeof addressOrId == 'number') {
      colonyAddress = await networkClient.getColony(addressOrId);
    } else {
      colonyAddress = addressOrId;
    }
    const colonyVersionClient = await getColonyVersionClient(
      colonyAddress,
      signerOrProvider,
    );
    // This is *kinda* hacky, but I have no better idea ¯\_(ツ)_/¯
    // We have to get the version somehow before instantiating the right contract version
    const versionBN = await colonyVersionClient.version();
    const version = versionBN.toNumber() as ColonyVersion;
    let colonyClient;
    switch (version) {
      case ColonyVersion.GoerliGlider: {
        colonyClient = getColonyClientV1.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.Glider: {
        colonyClient = getColonyClientV2.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.AuburnGlider: {
        colonyClient = getColonyClientV3.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.BurgundyGlider: {
        colonyClient = getColonyClientV4.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      default: {
        throw new Error('Colony version not supported');
      }
    }

    const tokenAddress = await colonyClient.getToken();
    colonyClient.tokenClient = getTokenClient(tokenAddress, signerOrProvider);

    // eslint-disable-next-line max-len
    const oneTxPaymentAddress = await networkClient.oneTxPaymentFactoryClient.deployedExtensions(
      colonyClient.address,
    );
    colonyClient.oneTxPaymentClient = getOneTxPaymentClient(
      oneTxPaymentAddress,
      colonyClient,
    );

    return colonyClient;
  };

  networkClient.getMetaColonyClient = async (): Promise<AnyColonyClient> => {
    const metaColonyAddress = await networkClient.getMetaColony();
    return networkClient.getColonyClient(metaColonyAddress);
  };

  networkClient.deployToken = async (
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<ContractTransaction> => {
    const tokenFactory = new ContractFactory(
      tokenAbi,
      tokenBytecode,
      networkClient.signer,
    );
    const tokenContract = await tokenFactory.deploy(name, symbol, decimals);
    await tokenContract.deployed();
    return tokenContract.deployTransaction;
  };

  networkClient.estimate.deployToken = async (
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<BigNumber> => {
    const tokenFactory = new ContractFactory(tokenAbi, tokenBytecode);
    const deployTx = tokenFactory.getDeployTransaction(name, symbol, decimals);
    return networkClient.provider.estimateGas(deployTx);
  };

  return networkClient;
};

export default getColonyNetworkClient;