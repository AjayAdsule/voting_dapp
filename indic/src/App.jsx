import { Contract } from "./component/Contract";
import GlobalProvider from "./context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <Contract />
    </GlobalProvider>
  );
}

export default App;
