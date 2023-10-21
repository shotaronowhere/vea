/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { OutboxMock, OutboxMockInterface } from "../../../../test/bridge-mocks/arbitrum/OutboxMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_veaInbox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "l2ToL1Sender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "veaInbox",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161013d38038061013d83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b60ab806100926000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806302d3e23614603757806380648b02146065575b600080fd5b6000546049906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6000546001600160a01b0316604956fea264697066735822122009a719251b0a43c0ed83aa20dabc3168de39ca3b153a352611a4c612dd9527c864736f6c63430008120033";

type OutboxMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: OutboxMockConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class OutboxMock__factory extends ContractFactory {
  constructor(...args: OutboxMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _veaInbox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OutboxMock> {
    return super.deploy(_veaInbox, overrides || {}) as Promise<OutboxMock>;
  }
  override getDeployTransaction(
    _veaInbox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_veaInbox, overrides || {});
  }
  override attach(address: string): OutboxMock {
    return super.attach(address) as OutboxMock;
  }
  override connect(signer: Signer): OutboxMock__factory {
    return super.connect(signer) as OutboxMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OutboxMockInterface {
    return new utils.Interface(_abi) as OutboxMockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OutboxMock {
    return new Contract(address, _abi, signerOrProvider) as OutboxMock;
  }
}