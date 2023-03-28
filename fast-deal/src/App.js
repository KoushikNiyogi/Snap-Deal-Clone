import "./App.css";
// import { TopNav } from "./Homepage/TopNav";
import { NavBar } from "./Homepage/NavBar";
import React, { useEffect, useState } from "react";

import Footer from "./Homepage/Footer";

import MainRoutes from "./Pages/MainRoutes";

function App() {
  const [showHamburger, setShowHamburger] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 850 && !showHamburger) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="App">
      <NavBar showHamburger={showHamburger} />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
//deployed json server link - "https://calm-blue-cobra-wig.cyclic.app"
