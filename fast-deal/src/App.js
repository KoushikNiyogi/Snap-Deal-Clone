import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

import Footer from "./Components/Footer/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./Homepage/NavBar";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <MainRoutes />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
//deployed json server link - "https://calm-blue-cobra-wig.cyclic.app"
