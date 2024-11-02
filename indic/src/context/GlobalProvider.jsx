import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { getWeb3 } from "../utils/getWeb3";

const GlobalProviderContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalStates, setGlobalStates] = useState({
    signer: null,
    provider: null,
    votingContractInstance: null,
    readVotingContractInstance: null,
    tokenContractInstance: null,
    readTokenMarketPlaceContractInstance: null,
    tokenMarkerPlaceContractInstance: null,
    currentAccount: null,
  });

  const handleConnectWallet = async () => {
    const {
      currentAccount,
      provider,
      readTokenMarketPlaceContractInstance,
      readVotingContractInstance,
      signer,
      tokenContractInstance,
      tokenMarkerPlaceContractInstance,
      votingContractInstance,
    } = await getWeb3();

    setGlobalStates({
      signer,
      provider,
      votingContractInstance,
      readVotingContractInstance,
      tokenContractInstance,
      readTokenMarketPlaceContractInstance,
      tokenMarkerPlaceContractInstance,
      currentAccount,
    });
  };

  return (
    <GlobalProviderContext.Provider
      value={{ globalStates, handleConnectWallet }}
    >
      {children}
    </GlobalProviderContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalProviderContext);

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
