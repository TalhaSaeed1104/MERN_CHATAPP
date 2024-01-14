import axios from "axios";
import { UserContextProvider } from "./routesandusercontext/UserContext";
import Routes from "./routesandusercontext/Routes";

function App() {
  axios.defaults.baseURL = `${window.location.origin}`;
  // axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
