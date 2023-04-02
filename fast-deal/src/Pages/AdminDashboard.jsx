import React from 'react'
import styled from 'styled-components'
import { AdminProductList } from '../Components/AdminProductList'
// import { Sidebar } from '../components/Sidebar'
import {AdminNavbar} from "../Components/AdminNavbar"


 const AdminDashboard = () => {
  return (
    <DIV>
      <AdminNavbar/>
      <div className='productlist'>
        <AdminProductList/>
      </div>
      
    </DIV>
  )
}
export default AdminDashboard
const DIV = styled.div`
  width: 100%;
  margin: auto;
  .productlist{
    
    
  }
`