import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Checkout from "../Components/Checkout/Checkout";
import {Button} from "@chakra-ui/react"


const MainRoutes = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/");
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/mens-footware" element={<MensShoePage />} />
      
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <AddCart />
          </PrivateRoute>
        }
      />

      <Route path="/product/:id" element={<SingleProductPage />} />

       <Route path="/admin" element={<Admin />} />
       <Route path='/checkout' element={<Checkout/>}/>

      <Route path="/admindashboard" element={<AdminDashboard/>}/>
      <Route path="/edit/:id" element={<AdminEditProduct/>}/> 

      <Route
        path="*"
        element={
          <div style = {{width: "50%", margin : "auto" }}>
            <h1>Error 404</h1>
            <h2>Page Not Foud</h2>
            <Button onClick = {()=>handleClick()}>Go to Homepage</Button>
          </div>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
