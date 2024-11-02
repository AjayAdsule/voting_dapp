import { ethers } from "ethers";
import indiCoinAbi from "./../abi/ind.json";

export default async function getWeb3State() {
  try {
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = account[0];

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contractAddress = "0x542D5c51300CFe7b544564aC689948F7dA79853b";

    const contractInstance = new ethers.Contract(
      contractAddress,
      indiCoinAbi,
      signer
    );
    return { selectedAccount, provider, signer, contractInstance };
  } catch (error) {
    console.error(error);
  }
}
