/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface OneTxPaymentInterface extends Interface {
  functions: {
    makePayment: TypedFunctionDescription<{
      encode([
        _permissionDomainId,
        _childSkillIndex,
        _callerPermissionDomainId,
        _callerChildSkillIndex,
        _worker,
        _token,
        _amount,
        _domainId,
        _skillId
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;
  };

  events: {};
}

export class OneTxPayment extends Contract {
  connect(signerOrProvider: Signer | Provider | string): OneTxPayment;
  attach(addressOrName: string): OneTxPayment;
  deployed(): Promise<OneTxPayment>;

  on(event: EventFilter | string, listener: Listener): OneTxPayment;
  once(event: EventFilter | string, listener: Listener): OneTxPayment;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): OneTxPayment;
  removeAllListeners(eventName: EventFilter | string): OneTxPayment;
  removeListener(eventName: any, listener: Listener): OneTxPayment;

  interface: OneTxPaymentInterface;

  functions: {
    /**
     * Assumes that each entity holds administration and funding roles in the same domain, although contract and caller can have the permissions in different domains.
     * Completes a colony payment in a single transaction
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _permissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _worker: string,
      _token: string,
      _amount: BigNumberish,
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Assumes that each entity holds administration and funding roles in the same domain, although contract and caller can have the permissions in different domains.
   * Completes a colony payment in a single transaction
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _permissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
   */
  makePayment(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _worker: string,
    _token: string,
    _amount: BigNumberish,
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _worker: string,
      _token: string,
      _amount: BigNumberish,
      _domainId: BigNumberish,
      _skillId: BigNumberish
    ): Promise<BigNumber>;
  };
}