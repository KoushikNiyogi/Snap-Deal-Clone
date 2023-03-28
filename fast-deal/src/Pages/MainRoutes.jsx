import React from 'react'
import {Routes , Route} from "react-router-dom"
import HomeandAppliance from './HomeandAppliance'
import HomePage from './HomePage'
import MensShoePage from './MensShoesPage'
import WomensPage from './WomensPage'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/products/mens-footware' element={<MensShoePage/>}/>
      <Route path='/product/women-footware' element={<WomensPage/>}/>
      <Route path='/product/homeandappliances' element={<HomeandAppliance/>}/>
    </Routes>
  )
}

export default MainRoutes