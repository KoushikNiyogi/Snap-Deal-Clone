import React from 'react'
import {Routes , Route} from "react-router-dom"
import HomeandAppliance from './HomeandAppliance'
import HomePage from './HomePage'
import MensPage from './MensPage'
import WomensPage from './WomensPage'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/menspage' element={<MensPage/>}/>
      <Route path='/womenpage' element={<WomensPage/>}/>
      <Route path='/homeandappliances' element={<HomeandAppliance/>}/>
    </Routes>
  )
}

export default MainRoutes