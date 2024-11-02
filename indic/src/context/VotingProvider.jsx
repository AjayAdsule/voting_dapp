import { createContext, useContext, useState } from "react";
import getVotingState from "../utils/getVotingState";

const VotingContext = createContext();

export default function VotingProvider({ children }) {
  const [votingState, setVotingState] = useState({
    votingContractInstance: null,
    currentAccount: null,
    chainId: null,
    signer: null,
    provider: null,
    readVotingContract: null,
  });

  const handleConnectWallet = async () => {
    const {
      votingContractInstance,
      currentAccount,
      provider,
      signer,
      readVotingContract,
    } = await getVotingState();

    setVotingState({
      votingContractInstance,
      currentAccount,
      provider,
      signer,
      readVotingContract,
    });
  };

  return (
    <VotingContext.Provider
      value={{ votingState, handleConnectWallet, setVotingState }}
    >
      {children}
    </VotingContext.Provider>
  );
}

export const useVotingContext = () => useContext(VotingContext);
