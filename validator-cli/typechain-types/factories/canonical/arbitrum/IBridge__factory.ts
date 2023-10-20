/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBridge, IBridgeInterface } from "../../../canonical/arbitrum/IBridge";

const _abi = [
  {
    inputs: [],
    name: "activeOutbox",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allowedDelayedInboxList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sequencerInbox",
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

export class IBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IBridgeInterface {
    return new utils.Interface(_abi) as IBridgeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBridge {
    return new Contract(address, _abi, signerOrProvider) as IBridge;
  }
}
