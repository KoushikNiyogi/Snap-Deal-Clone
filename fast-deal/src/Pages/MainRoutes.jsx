import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart";
import HomeandAppliance from "./HomeandAppliance";
import HomePage from "./HomePage";
import MensPage from "./MensShoesPage";
import WomensPage from "./WomensPage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menspage" element={<MensPage />} />
      <Route path="/womenpage" element={<WomensPage />} />
      <Route path="/homeandappliances" element={<HomeandAppliance />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
