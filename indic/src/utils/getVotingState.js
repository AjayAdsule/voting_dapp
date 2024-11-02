import { ethers } from "ethers";
import votingAbi from "./../abi/voting.json";

export default async function getVotingState() {
  if (!window.ethereum) throw new Error("please installed metamask on device");

  try {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const currentAccount = account[0];
    const provider = new ethers.BrowserProvider(window.ethereum);
    const votingContractAddress = "0xcF3Ac8c8e14229046Ab191533Db9681133349AF0";
    const signer = provider.getSigner();

    const readVotingContract = new ethers.Contract(
      votingContractAddress,
      votingAbi,
      provider
    );
    const votingContractInstance = new ethers.Contract(
      votingContractAddress,
      votingAbi,
      signer
    );

    return {
      votingContractInstance,
      currentAccount,
      provider,
      signer,
      readVotingContract,
    };
  } catch (error) {
    console.error("Error connecting to voting contract:", error);
  }
}

// ? sepolia voting project deploy address =0xcF3Ac8c8e14229046Ab191533Db9681133349AF0
//? etherscan url =https://sepolia.etherscan.io/tx/0x1c43099427ded85ee3a1236709f0532458d6794802cd4618c955bb40914e64b3
