/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { CoinMachine } from "./CoinMachine";

export class CoinMachineFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<CoinMachine> {
    return super.deploy(overrides) as Promise<CoinMachine>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): CoinMachine {
    return super.attach(address) as CoinMachine;
  }
  connect(signer: Signer): CoinMachineFactory {
    return super.connect(signer) as CoinMachineFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinMachine {
    return new Contract(address, _abi, signerOrProvider) as CoinMachine;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ExtensionInitialised",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address"
      }
    ],
    name: "LogSetAuthority",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "LogSetOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "activePeriod",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPeriod",
        type: "uint256"
      }
    ],
    name: "PeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokens",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCost",
        type: "uint256"
      }
    ],
    name: "TokensBought",
    type: "event"
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDeprecated",
    outputs: [
      {
        internalType: "bool",
        name: "deprecated",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address"
      }
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      }
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "identifier",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_colony",
        type: "address"
      }
    ],
    name: "install",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "finishUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_deprecated",
        type: "bool"
      }
    ],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "uninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_purchaseToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_periodLength",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_windowSize",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_targetPerPeriod",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxPerPeriod",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256"
      }
    ],
    name: "initialise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numTokens",
        type: "uint256"
      }
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "updatePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getPeriodLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getWindowSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTargetPerPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaxPerPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNumAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a261127d8061005e6000396000f3fe60806040526004361061011f5760003560e01c80638410956a116100a0578063a83627de11610064578063a83627de146102b9578063bf7e214f146102ce578063eb91d37e146102e3578063fb3d8ee5146102f8578063fcf6ba931461030d5761011f565b80638410956a1461022d5780638469ddc71461024d5780638da5cb5b146102625780639251cff414610284578063a0e3ad26146102a45761011f565b8063340df28f116100e7578063340df28f146101bb5780633610724e146101d057806354fd4d50146101e35780637998a1c4146101f85780637a9e5e4b1461020d5761011f565b80630d638f301461012457806313af40351461013b5780631f7ea81f1461015b5780632a1b8f9b146101865780632a85c366146101a6575b600080fd5b34801561013057600080fd5b5061013961032f565b005b34801561014757600080fd5b50610139610156366004610dcd565b610378565b34801561016757600080fd5b506101706103fa565b60405161017d9190610f64565b60405180910390f35b34801561019257600080fd5b506101396101a1366004610dcd565b610401565b3480156101b257600080fd5b5061017061047e565b3480156101c757600080fd5b50610139610484565b6101396101de366004610e73565b6104b8565b3480156101ef57600080fd5b506101706106c5565b34801561020457600080fd5b506101706106ca565b34801561021957600080fd5b50610139610228366004610dcd565b6106ee565b34801561023957600080fd5b50610139610248366004610df0565b61076c565b34801561025957600080fd5b50610170610960565b34801561026e57600080fd5b50610277610966565b60405161017d9190610e8b565b34801561029057600080fd5b5061013961029f366004610e3b565b610975565b3480156102b057600080fd5b506101706109c5565b3480156102c557600080fd5b506101396109cb565b3480156102da57600080fd5b50610277610aa2565b3480156102ef57600080fd5b50610170610ab1565b34801561030457600080fd5b50610170610b46565b34801561031957600080fd5b50610322610b6c565b60405161017d9190610f59565b610345336000356001600160e01b031916610b71565b61036a5760405162461bcd60e51b815260040161036190610f6d565b60405180910390fd5b6003546001600160a01b0316ff5b61038e336000356001600160e01b031916610b71565b6103aa5760405162461bcd60e51b815260040161036190610f6d565b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b6009545b90565b610417336000356001600160e01b031916610b71565b6104335760405162461bcd60e51b815260040161036190610f6d565b6003546001600160a01b03161561045c5760405162461bcd60e51b8152600401610361906110c9565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60085490565b61049a336000356001600160e01b031916610b71565b6104b65760405162461bcd60e51b815260040161036190610f6d565b565b600354600160a01b900460ff16156104e25760405162461bcd60e51b8152600401610361906111dc565b6104ea6109cb565b60006104fc82600c5460095403610c4f565b9050600061050c82600b54610c66565b600d805482019055600c8054840190819055600954919250111561052c57fe5b6004546001600160a01b031661059a578034101561055c5760405162461bcd60e51b815260040161036190611137565b803411156105955760405133903483900380156108fc02916000818181858888f19350505050158015610593573d6000803e3d6000fd5b505b610621565b600480546040516323b872dd60e01b81526001600160a01b03909116916323b872dd916105cd9133913091879101610e9f565b602060405180830381600087803b1580156105e757600080fd5b505af11580156105fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f9190610e57565b505b600354604051638f6811a360e01b81526001600160a01b0390911690638f6811a3906106539033908690600401610ef2565b600060405180830381600087803b15801561066d57600080fd5b505af1158015610681573d6000803e3d6000fd5b505050507f8442948036198f1146d3a63c3db355d7e0295c2cc5676c755990445da4fdc1c93384836040516106b893929190610f0b565b60405180910390a1505050565b600190565b7f9600bfe26d6984b5236952886f19c3d84b771865e505e2cb8f3a7137b7f3a46590565b610704336000356001600160e01b031916610b71565b6107205760405162461bcd60e51b815260040161036190610f6d565b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b600354604051635597bd7160e11b81526001600160a01b039091169063ab2f7ae2906107a19033906001908190600401610ec3565b60206040518083038186803b1580156107b957600080fd5b505afa1580156107cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f19190610e57565b61080d5760405162461bcd60e51b815260040161036190610f9b565b600a541561082d5760405162461bcd60e51b81526004016103619061105d565b6000851161084d5760405162461bcd60e51b81526004016103619061116e565b6000841161086d5760405162461bcd60e51b815260040161036190610ff8565b6101ff84111561088f5760405162461bcd60e51b8152600401610361906111a5565b600083116108af5760405162461bcd60e51b815260040161036190611100565b828210156108cf5760405162461bcd60e51b815260040161036190611092565b600480546001600160a01b0319166001600160a01b03881617905560058590556108fd600260018601610c9f565b600655600784905560088390556009829055600b81905561091c610cbf565b600a5560085461092c9082610c66565b600e556040517f690c4b6201f6a4c703f9d21c205d98a08dff8461e7a71e49c6d47cc8b894850190600090a1505050505050565b60055490565b6001546001600160a01b031681565b61098b336000356001600160e01b031916610b71565b6109a75760405162461bcd60e51b815260040161036190610f6d565b60038054911515600160a01b0260ff60a01b19909216919091179055565b60075490565b60006109d5610cbf565b600a5490915081811015610a65576109f1600654600d54610c66565b610a09600654670de0b6b3a764000003600e54610c66565b01600e556000600d819055600c55600a548203600019018015610a4b57610a47610a3f600654670de0b6b3a76400000383610cd2565b600e54610c66565b600e555b82600a81905550610a60600e54600854610c9f565b600b55505b7f5b873fc01d45058fe77f3883a91020f46d5a7385baac6ceab19748d1d0ae464a8183604051610a96929190611213565b60405180910390a15050565b6000546001600160a01b031681565b600080610abc610cbf565b905080600a541415610ad2575050600b546103fe565b600e54600654600d54610ae59190610c66565b610afb600654670de0b6b3a76400000383610c66565b600a54910191508203600019018015610b3057610b2d610b27600654670de0b6b3a76400000383610cd2565b83610c66565b91505b610b3c82600854610c9f565b93505050506103fe565b6000610b50610cbf565b600a5414610b5f576000610b63565b600c545b60095403905090565b600090565b60006001600160a01b038316301415610b8c57506001610c49565b6001546001600160a01b0384811691161415610baa57506001610c49565b6000546001600160a01b0316610bc257506000610c49565b60005460405163b700961360e01b81526001600160a01b039091169063b700961390610bf690869030908790600401610f2c565b60206040518083038186803b158015610c0e57600080fd5b505afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190610e57565b90505b92915050565b600081831115610c5f5781610c46565b5090919050565b6000670de0b6b3a7640000610c90610c7e8585610ce9565b6002670de0b6b3a76400005b04610d20565b81610c9757fe5b049392505050565b600081610c90610cb785670de0b6b3a7640000610ce9565b600285610c8a565b60006005544281610ccc57fe5b04905090565b6000633b9aca00610c9084633b9aca000284610d43565b6000811580610d0457505080820282828281610d0157fe5b04145b610c495760405162461bcd60e51b815260040161036190610fca565b80820182811015610c495760405162461bcd60e51b81526004016103619061102f565b600060028206610d5f576b033b2e3c9fd0803ce8000000610d61565b825b90506002820491505b8115610c4957610d7a8384610d9d565b92506002820615610d9257610d8f8184610d9d565b90505b600282049150610d6a565b60006b033b2e3c9fd0803ce8000000610c90610db98585610ce9565b60026b033b2e3c9fd0803ce8000000610c8a565b600060208284031215610dde578081fd5b8135610de981611221565b9392505050565b60008060008060008060c08789031215610e08578182fd5b8635610e1381611221565b9860208801359850604088013597606081013597506080810135965060a00135945092505050565b600060208284031215610e4c578081fd5b8135610de981611239565b600060208284031215610e68578081fd5b8151610de981611239565b600060208284031215610e84578081fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0384168152602081018390526060810160088310610ee457fe5b826040830152949350505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b901515815260200190565b90815260200190565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b60208082526015908201527418dbda5b8b5b5858da1a5b994b5b9bdd0b5c9bdbdd605a1b604082015260600190565b60208082526014908201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d736d616c6c000000604082015260600190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b6020808252818101527f636f696e2d6d616368696e652d616c72656164792d696e697469616c69736564604082015260600190565b6020808252601a908201527f636f696e2d6d616368696e652d6d61782d746f6f2d736d616c6c000000000000604082015260600190565b6020808252601b908201527f657874656e73696f6e2d616c72656164792d696e7374616c6c65640000000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d7461726765742d746f6f2d736d616c6c000000604082015260600190565b6020808252601f908201527f636f696e2d6d616368696e652d696e73756666696369656e742d66756e647300604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d706572696f642d746f6f2d736d616c6c000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d6c61726765000000604082015260600190565b6020808252601b908201527f636f6c6f6e792d657874656e73696f6e2d646570726563617465640000000000604082015260600190565b918252602082015260400190565b6001600160a01b038116811461123657600080fd5b50565b801515811461123657600080fdfea26469706673582212209e1d08eb3dd3c02e1cce71005c976626edc2355091f40f4fe3d243fd071de0b364736f6c63430007030033";
