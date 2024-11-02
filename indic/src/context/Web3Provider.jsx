import { createContext, useContext, useState } from "react";
import getWeb3State from "../utils/getWeb3State";

export const Web3Context = createContext();

export default function Web3Provider({ children }) {
  const [web3State, setWeb3StateWallet] = useState({
    contractInstance: null,
    selectedAccount: null,
    chainId: null,
    signer: null,
    provider: null,
  });
  const handleConnectWallet = async () => {
    const { signer, chainId, provider, contractInstance, selectedAccount } =
      await getWeb3State();

    setWeb3StateWallet({
      contractInstance,
      selectedAccount,
      chainId,
      signer,
      provider,
    });
  };
  return (
    <>
      <Web3Context.Provider
        value={{ web3State, setWeb3StateWallet, handleConnectWallet }}
      >
        {children}
      </Web3Context.Provider>
    </>
  );
}

export const useWeb3Context = () => useContext(Web3Context);
