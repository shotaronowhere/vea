/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { VeaInboxGnosisToArb, VeaInboxGnosisToArbInterface } from "../../gnosisToArbitrum/VeaInboxGnosisToArb";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epochPeriod",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_routerGnosisToArb",
        type: "address",
      },
      {
        internalType: "contract IAMB",
        name: "_amb",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "_nodeData",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_snapshot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_count",
        type: "uint64",
      },
    ],
    name: "SnapshotSaved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_epochSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_ticketId",
        type: "bytes32",
      },
    ],
    name: "SnapshotSent",
    type: "event",
  },
  {
    inputs: [],
    name: "amb",
    outputs: [
      {
        internalType: "contract IAMB",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "epochAt",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochFinalized",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochNow",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "routerGnosisToArb",
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
    name: "saveSnapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_fnSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_inboxIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFeePerGas",
        type: "uint256",
      },
    ],
    name: "sendSnapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "snapshots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610c12380380610c1283398101604081905261002f91610064565b60a0929092526001600160a01b0390811660c052166080526100a7565b6001600160a01b038116811461006157600080fd5b50565b60008060006060848603121561007957600080fd5b83519250602084015161008b8161004c565b604085015190925061009c8161004c565b809150509250925092565b60805160a05160c051610b0c610106600039600081816101cc015261036f015260008181610185015281816101f5015281816102210152818161048c015281816104c201526104f201526000818160e501526103460152610b0c6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80634a439cfe116100715780634a439cfe1461015257806351920535146101655780635f85896c1461016d578063b5b7a18414610180578063d6565a2d146101a7578063eb8dedfa146101c757600080fd5b806306661abd146100ae5780631062b39a146100e0578063222ae7861461011f5780632bbb4704146101355780633ac3b6b61461014a575b600080fd5b6041546100c29067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020015b60405180910390f35b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d7565b6101276101ee565b6040519081526020016100d7565b6101486101433660046107ca565b61021f565b005b610127610483565b61012761016036600461081b565b6104bb565b6101486104ed565b6100c261017b36600461084a565b610611565b6101277f000000000000000000000000000000000000000000000000000000000000000081565b6101276101b536600461081b565b60006020819052908152604090205481565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b600061021a7f000000000000000000000000000000000000000000000000000000000000000042610941565b905090565b7f0000000000000000000000000000000000000000000000000000000000000000428161024e5761024e61092b565b0486106102ad5760405162461bcd60e51b815260206004820152602260248201527f43616e206f6e6c792073656e6420706173742065706f636820736e617073686f6044820152613a1760f11b60648201526084015b60405180910390fd5b60008681526020819052604080822054905160248101899052604481019190915260648101879052608481018690526001600160a01b03851660a482015260c4810184905260e481018390526101040160408051601f19818403018152918152602080830180516001600160e01b031663507b5ad360e01b179052815163e5789d0360e01b815291519293506000926001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263dc8601b3927f0000000000000000000000000000000000000000000000000000000000000000928792869263e5789d03926004808401938290030181865afa1580156103b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dc9190610963565b6040518463ffffffff1660e01b81526004016103fa939291906109cc565b6020604051808303816000875af1158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d9190610963565b9050877f6fdd49f435101fc7b6ebdec7c8972932a926d18f6cb78a8891dfe950743b6b828260405161047191815260200190565b60405180910390a25050505050505050565b600060016104b17f000000000000000000000000000000000000000000000000000000000000000042610941565b61021a9190610a00565b60006104e77f000000000000000000000000000000000000000000000000000000000000000083610941565b92915050565b6000807f0000000000000000000000000000000000000000000000000000000000000000428161051f5761051f61092b565b604154919004925060009067ffffffffffffffff165b801561056e5780600116600103610562576001826040811061055957610559610a21565b0154925061056e565b6001918201911c610535565b60011c5b80156105b05760019182019181811690036105a8576105a56001836040811061059d5761059d610a21565b01548461077d565b92505b60011c610572565b505060008281526020818152604091829020839055604154825184815291820185905267ffffffffffffffff168183015290517f592424eb1d6135501bd20833f15fd127c29d08eed4f03872f6f75182126b1e489181900360600190a15050565b60415460009067ffffffffffffffff9081169081106106635760405162461bcd60e51b815260206004820152600e60248201526d24b73137bc1034b990333ab6361760911b60448201526064016102a4565b6040516000908290879061067f90889033908990602001610a37565b60408051601f198184030181529082905261069e939291602001610a6d565b60408051601f1981840301815291905280516020808301919091206000908152908120919250600184015b60018116600003610702576106ea6001836040811061059d5761059d610a21565b92506001918201911c677fffffffffffffff166106c9565b50816001826040811061071757610717610a21565b0155506041805467ffffffffffffffff19166001850167ffffffffffffffff161790556040517f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b0369061076a908490610abc565b60405180910390a1509095945050505050565b60008183101561079b578260005281602052604060002090506104e7565b5060009081526020919091526040902090565b80356001600160a01b03811681146107c557600080fd5b919050565b60008060008060008060c087890312156107e357600080fd5b863595506020870135945060408701359350610801606088016107ae565b92506080870135915060a087013590509295509295509295565b60006020828403121561082d57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561085f57600080fd5b610868846107ae565b925060208401356001600160e01b03198116811461088557600080fd5b9150604084013567ffffffffffffffff808211156108a257600080fd5b818601915086601f8301126108b657600080fd5b8135818111156108c8576108c8610834565b604051601f8201601f19908116603f011681019083821181831017156108f0576108f0610834565b8160405282815289602084870101111561090957600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b634e487b7160e01b600052601260045260246000fd5b60008261095e57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561097557600080fd5b5051919050565b60005b8381101561099757818101518382015260200161097f565b50506000910152565b600081518084526109b881602086016020860161097c565b601f01601f19169290920160200192915050565b6001600160a01b03841681526060602082018190526000906109f0908301856109a0565b9050826040830152949350505050565b818103818111156104e757634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b63ffffffff60e01b8416815282600482015260008251610a5e81602485016020870161097c565b91909101602401949350505050565b67ffffffffffffffff60c01b8460c01b1681526bffffffffffffffffffffffff198360601b16600882015260008251610aad81601c85016020870161097c565b91909101601c01949350505050565b602081526000610acf60208301846109a0565b939250505056fea26469706673582212208f85936a0d5ffa471af8a38c879ca78b06fcc0561f714b8395bb25bd09df413f64736f6c63430008120033";

type VeaInboxGnosisToArbConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: VeaInboxGnosisToArbConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class VeaInboxGnosisToArb__factory extends ContractFactory {
  constructor(...args: VeaInboxGnosisToArbConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _epochPeriod: PromiseOrValue<BigNumberish>,
    _routerGnosisToArb: PromiseOrValue<string>,
    _amb: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VeaInboxGnosisToArb> {
    return super.deploy(_epochPeriod, _routerGnosisToArb, _amb, overrides || {}) as Promise<VeaInboxGnosisToArb>;
  }
  override getDeployTransaction(
    _epochPeriod: PromiseOrValue<BigNumberish>,
    _routerGnosisToArb: PromiseOrValue<string>,
    _amb: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_epochPeriod, _routerGnosisToArb, _amb, overrides || {});
  }
  override attach(address: string): VeaInboxGnosisToArb {
    return super.attach(address) as VeaInboxGnosisToArb;
  }
  override connect(signer: Signer): VeaInboxGnosisToArb__factory {
    return super.connect(signer) as VeaInboxGnosisToArb__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VeaInboxGnosisToArbInterface {
    return new utils.Interface(_abi) as VeaInboxGnosisToArbInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VeaInboxGnosisToArb {
    return new Contract(address, _abi, signerOrProvider) as VeaInboxGnosisToArb;
  }
}
