import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
//deployed json server link - "https://calm-blue-cobra-wig.cyclic.app"
