import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/AddCart";
import HomeandAppliance from "./HomeandAppliance";
import HomePage from "./HomePage";
import MensShoePage from "./MensShoesPage";

import WomensPage from "./WomensPage";
import SingleProductPage from "./SigleProductpage";
import Admin from "./Admin";
import AdminDashboard from "./AdminDashboard";
import AdminEditProduct from "./AdminEditProduct";
import { PrivateRoute } from "../Components/PrivateRoute";
import AddCart from "../Components/AddCart";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/mens-footware" element={<MensShoePage />} />
      <Route path="/product/women-footware" element={<WomensPage />} />
      <Route path="/product/homeandappliances" element={<HomeandAppliance />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/cart" element={<AddCart />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/edit/:id" element={<AdminEditProduct />} />
      <Route
        path="*"
        element={
          <div>
            <h1>Error 404</h1>
            <h2>Page Not Foud</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
