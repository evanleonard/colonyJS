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
        _workers,
        _tokens,
        _amounts,
        _domainId,
        _skillId
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string[],
        string[],
        BigNumberish[],
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    makePaymentFundedFromDomain: TypedFunctionDescription<{
      encode([
        _permissionDomainId,
        _childSkillIndex,
        _callerPermissionDomainId,
        _callerChildSkillIndex,
        _workers,
        _tokens,
        _amounts,
        _domainId,
        _skillId
      ]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string[],
        string[],
        BigNumberish[],
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
     * Assumes that each entity holds administration and funding roles in the same domain, although contract and caller can have the permissions in different domains. Payment is taken from root domain, and the caller must have funding permission explicitly in the root domain
     * Completes a colony payment in a single transaction
     * @param _amounts amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The Id of the domain the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The Id of the skill that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePayment(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Assumes that each entity holds administration and funding roles in the same domain, although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
     * Completes a colony payment in a single transaction
     * @param _amounts The amounts of the tokens being paid out
     * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
     * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
     * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
     * @param _domainId The Id of the domain the payment should be coming from
     * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
     * @param _skillId The Id of the skill that the payment should be marked with, possibly awarding reputation in this skill.
     * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
     * @param _workers The addresses of the recipients of the payment
     */
    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Assumes that each entity holds administration and funding roles in the same domain, although contract and caller can have the permissions in different domains. Payment is taken from root domain, and the caller must have funding permission explicitly in the root domain
   * Completes a colony payment in a single transaction
   * @param _amounts amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The Id of the domain the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The Id of the skill that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens Addresses of the tokens the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  makePayment(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Assumes that each entity holds administration and funding roles in the same domain, although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.
   * Completes a colony payment in a single transaction
   * @param _amounts The amounts of the tokens being paid out
   * @param _callerChildSkillIndex Index of the _callerPermissionDomainId skill.children array to get
   * @param _callerPermissionDomainId The domainId in which the _caller_ has permissions to add a payment and fund it
   * @param _childSkillIndex Index of the _permissionDomainId skill.children array to get
   * @param _domainId The Id of the domain the payment should be coming from
   * @param _permissionDomainId The domainId in which the _contract_ has permissions to add a payment and fund it
   * @param _skillId The Id of the skill that the payment should be marked with, possibly awarding reputation in this skill.
   * @param _tokens The addresses of the token the payments are being made in. 0x00 for Ether.
   * @param _workers The addresses of the recipients of the payment
   */
  makePaymentFundedFromDomain(
    _permissionDomainId: BigNumberish,
    _childSkillIndex: BigNumberish,
    _callerPermissionDomainId: BigNumberish,
    _callerChildSkillIndex: BigNumberish,
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
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
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish
    ): Promise<BigNumber>;

    makePaymentFundedFromDomain(
      _permissionDomainId: BigNumberish,
      _childSkillIndex: BigNumberish,
      _callerPermissionDomainId: BigNumberish,
      _callerChildSkillIndex: BigNumberish,
      _workers: string[],
      _tokens: string[],
      _amounts: BigNumberish[],
      _domainId: BigNumberish,
      _skillId: BigNumberish
    ): Promise<BigNumber>;
  };
}
