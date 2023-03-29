<<<<<<< HEAD
import React from 'react'
import {Routes , Route} from "react-router-dom"
import Cart from './Cart'
import HomeandAppliance from './HomeandAppliance'
import HomePage from './HomePage'
import Login from './Login'
import MensShoePage from './MensShoesPage'
import Signup from './Signup'
import WomensPage from './WomensPage'
import SingleProductPage from "./SigleProductpage"
import Admin from './Admin'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product/mens-footware' element={<MensShoePage/>}/>
      <Route path='/product/women-footware' element={<WomensPage/>}/>
      <Route path='/product/homeandappliances' element={<HomeandAppliance/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
      <Route patth="/admin" elemnet={<Admin/>}/>
      <Route path="*" element={<div>
            <h1>Error 404</h1>
            <h2>Page Not Foud</h2>
      </div>}/>
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart";
import HomeandAppliance from "./HomeandAppliance";
import HomePage from "./HomePage";
import MensPage from "./MensPage";
import WomensPage from "./WomensPage";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menspage" element={<MensPage />} />
      <Route path="/womenpage" element={<WomensPage />} />
      <Route path="/homeandappliances" element={<HomeandAppliance />} />
      <Route path="/cart" element={<Cart />} />
>>>>>>> a261fb2c29a2b68093bf299a3e2430cfc8fca879
    </Routes>
  );
};

export default MainRoutes;
