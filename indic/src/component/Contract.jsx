import { address } from "../constant/contractAddress";
import { useGlobalContext } from "../context/GlobalProvider";
import { formatUnits } from "ethers";

export const Contract = () => {
  const { handleConnectWallet, globalStates } = useGlobalContext();

  const { readVotingContractInstance, tokenContractInstance } = globalStates;
  const handleGetContract = async () => {
    // const sendToken = await tokenContractInstance.transfer(
    //   address.tokenMarkerPlaceContractAddress,
    //   50
    // );
    const balance = await tokenContractInstance.balanceOf(
      address.tokenMarkerPlaceContractAddress
    );

    console.log(balance);
  };

  return (
    <div>
      <button onClick={handleConnectWallet}>connect wallet</button>
      <button onClick={handleGetContract}>Name</button>
    </div>
  );
};

// ? https://stackoverflow.com/questions/76137839/error-contract-runner-does-not-support-calling-operation-call-code-unsuppor
