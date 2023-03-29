import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

import Footer from "./Components/Footer/Footer";
import { LoginSignUpContextProvider } from "./context/Login-SignUpContext";
import LoginModal from "./Components/Signup-Login/SignUp";
import Login from "./Components/Signup-Login/Login";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./Homepage/NavBar";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <LoginSignUpContextProvider>
          <Navbar />
          <MainRoutes />
          <Login />
          <Footer />
        </LoginSignUpContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
//deployed json server link - "https://calm-blue-cobra-wig.cyclic.app"
