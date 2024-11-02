import { ethers } from "ethers";
import TokenMarkerPlaceAbi from "./../abi/tokenMarketPlace.json";
import { address } from "../constant/contractAddress";
import votingAbi from "./../abi/voting.json";
import indiCoinAbi from "./../abi/ind.json";

export const getWeb3 = async () => {
  try {
    if (!window.ethereum) throw new Error("Metamask is not installed");

    const currentAccount = await window.ethereum.request({
      method: "eth_requestAccounts",
    })[0];

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // ?  Token market place contract read and write  instance    //
    const readTokenMarketPlaceContractInstance = new ethers.Contract(
      address.tokenMarkerPlaceContractAddress,
      TokenMarkerPlaceAbi,
      provider
    );

    const tokenMarkerPlaceContractInstance = new ethers.Contract(
      address.tokenMarkerPlaceContractAddress,
      TokenMarkerPlaceAbi,
      signer
    );

    // ?  Voting contract read and write instance    //
    const readVotingContractInstance = new ethers.Contract(
      address.votingContractAddress,
      votingAbi,
      provider
    );
    const votingContractInstance = new ethers.Contract(
      address.votingContractAddress,
      votingAbi,
      signer
    );

    // ? Token contract instance
    const tokenContractInstance = new ethers.Contract(
      address.tokenContractAddress,
      indiCoinAbi,
      signer
    );

    return {
      provider,
      signer,
      currentAccount,
      readTokenMarketPlaceContractInstance,
      tokenMarkerPlaceContractInstance,
      readVotingContractInstance,
      votingContractInstance,
      tokenContractInstance,
    };
  } catch (error) {
    throw Error(error);
  }
};
