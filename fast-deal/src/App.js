import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

import Footer from "./Components/Footer/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./Homepage/NavBar";
import { AdminNavbar } from "./Components/AdminNavbar";


function App() {
  return (
    <div className="App">

      <ChakraProvider>
        {/* <AdminNavbar/> */}
        <NavBar />
        <MainRoutes />
        <Footer />
      </ChakraProvider>

    </div>
  );
}

export default App;
//deployed json server link - "https://calm-blue-cobra-wig.cyclic.app"
