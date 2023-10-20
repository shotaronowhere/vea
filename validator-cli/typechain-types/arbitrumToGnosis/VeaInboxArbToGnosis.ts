/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";

export type ClaimStruct = {
  stateRoot: PromiseOrValue<BytesLike>;
  claimer: PromiseOrValue<string>;
  timestampClaimed: PromiseOrValue<BigNumberish>;
  timestampVerification: PromiseOrValue<BigNumberish>;
  blocknumberVerification: PromiseOrValue<BigNumberish>;
  honest: PromiseOrValue<BigNumberish>;
  challenger: PromiseOrValue<string>;
};

export type ClaimStructOutput = [string, string, number, number, number, number, string] & {
  stateRoot: string;
  claimer: string;
  timestampClaimed: number;
  timestampVerification: number;
  blocknumberVerification: number;
  honest: number;
  challenger: string;
};

export interface VeaInboxArbToGnosisInterface extends utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "epochAt(uint256)": FunctionFragment;
    "epochFinalized()": FunctionFragment;
    "epochNow()": FunctionFragment;
    "epochPeriod()": FunctionFragment;
    "routerArbToGnosis()": FunctionFragment;
    "saveSnapshot()": FunctionFragment;
    "sendMessage(address,bytes4,bytes)": FunctionFragment;
    "sendSnapshot(uint256,uint256,(bytes32,address,uint32,uint32,uint32,uint8,address))": FunctionFragment;
    "snapshots(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "count"
      | "epochAt"
      | "epochFinalized"
      | "epochNow"
      | "epochPeriod"
      | "routerArbToGnosis"
      | "saveSnapshot"
      | "sendMessage"
      | "sendSnapshot"
      | "snapshots"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "epochAt", values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: "epochFinalized", values?: undefined): string;
  encodeFunctionData(functionFragment: "epochNow", values?: undefined): string;
  encodeFunctionData(functionFragment: "epochPeriod", values?: undefined): string;
  encodeFunctionData(functionFragment: "routerArbToGnosis", values?: undefined): string;
  encodeFunctionData(functionFragment: "saveSnapshot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendSnapshot",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, ClaimStruct]
  ): string;
  encodeFunctionData(functionFragment: "snapshots", values: [PromiseOrValue<BigNumberish>]): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epochAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epochFinalized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epochNow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epochPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "routerArbToGnosis", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "saveSnapshot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendSnapshot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "snapshots", data: BytesLike): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
    "SnapshotSaved(bytes32,uint256,uint64)": EventFragment;
    "SnapshotSent(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SnapshotSaved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SnapshotSent"): EventFragment;
}

export interface MessageSentEventObject {
  _nodeData: string;
}
export type MessageSentEvent = TypedEvent<[string], MessageSentEventObject>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface SnapshotSavedEventObject {
  _snapshot: string;
  _epoch: BigNumber;
  _count: BigNumber;
}
export type SnapshotSavedEvent = TypedEvent<[string, BigNumber, BigNumber], SnapshotSavedEventObject>;

export type SnapshotSavedEventFilter = TypedEventFilter<SnapshotSavedEvent>;

export interface SnapshotSentEventObject {
  _epochSent: BigNumber;
  _ticketId: string;
}
export type SnapshotSentEvent = TypedEvent<[BigNumber, string], SnapshotSentEventObject>;

export type SnapshotSentEventFilter = TypedEventFilter<SnapshotSentEvent>;

export interface VeaInboxArbToGnosis extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VeaInboxArbToGnosisInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochAt(
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { epoch: BigNumber }>;

    epochFinalized(overrides?: CallOverrides): Promise<[BigNumber] & { epoch: BigNumber }>;

    epochNow(overrides?: CallOverrides): Promise<[BigNumber] & { epoch: BigNumber }>;

    epochPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    routerArbToGnosis(overrides?: CallOverrides): Promise<[string]>;

    saveSnapshot(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _fnSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendSnapshot(
      _epoch: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _claim: ClaimStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    snapshots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  epochAt(_timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  epochFinalized(overrides?: CallOverrides): Promise<BigNumber>;

  epochNow(overrides?: CallOverrides): Promise<BigNumber>;

  epochPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  routerArbToGnosis(overrides?: CallOverrides): Promise<string>;

  saveSnapshot(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  sendMessage(
    _to: PromiseOrValue<string>,
    _fnSelector: PromiseOrValue<BytesLike>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendSnapshot(
    _epoch: PromiseOrValue<BigNumberish>,
    _gasLimit: PromiseOrValue<BigNumberish>,
    _claim: ClaimStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  snapshots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    epochAt(_timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    epochFinalized(overrides?: CallOverrides): Promise<BigNumber>;

    epochNow(overrides?: CallOverrides): Promise<BigNumber>;

    epochPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    routerArbToGnosis(overrides?: CallOverrides): Promise<string>;

    saveSnapshot(overrides?: CallOverrides): Promise<void>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _fnSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendSnapshot(
      _epoch: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _claim: ClaimStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    snapshots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "MessageSent(bytes)"(_nodeData?: null): MessageSentEventFilter;
    MessageSent(_nodeData?: null): MessageSentEventFilter;

    "SnapshotSaved(bytes32,uint256,uint64)"(_snapshot?: null, _epoch?: null, _count?: null): SnapshotSavedEventFilter;
    SnapshotSaved(_snapshot?: null, _epoch?: null, _count?: null): SnapshotSavedEventFilter;

    "SnapshotSent(uint256,bytes32)"(
      _epochSent?: PromiseOrValue<BigNumberish> | null,
      _ticketId?: null
    ): SnapshotSentEventFilter;
    SnapshotSent(_epochSent?: PromiseOrValue<BigNumberish> | null, _ticketId?: null): SnapshotSentEventFilter;
  };

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    epochAt(_timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    epochFinalized(overrides?: CallOverrides): Promise<BigNumber>;

    epochNow(overrides?: CallOverrides): Promise<BigNumber>;

    epochPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    routerArbToGnosis(overrides?: CallOverrides): Promise<BigNumber>;

    saveSnapshot(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _fnSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendSnapshot(
      _epoch: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _claim: ClaimStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    snapshots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochAt(_timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochFinalized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochNow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routerArbToGnosis(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    saveSnapshot(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _fnSelector: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendSnapshot(
      _epoch: PromiseOrValue<BigNumberish>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      _claim: ClaimStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    snapshots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
