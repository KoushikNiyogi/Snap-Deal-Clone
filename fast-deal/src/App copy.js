import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

import Footer from "./Components/Footer/Footer";
import { NavBar } from "./Homepage/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
//deployed json server link - "https://calm-blue-cobra-wig.cyclic.app"
