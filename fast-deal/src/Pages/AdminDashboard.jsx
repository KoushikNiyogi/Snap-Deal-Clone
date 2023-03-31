import React from 'react'
import styled from 'styled-components'
import { AdminProductList } from '../Components/AdminProductList'
// import { Sidebar } from '../components/Sidebar'

 const AdminDashboard = () => {
  return (
    <DIV>
      <div className='productlist'>
        <AdminProductList/>
      </div>
      
    </DIV>
  )
}
export default AdminDashboard
const DIV = styled.div`
  /* display: flex; */
  margin: auto;
  .productlist{
    border: 1px solid red;
    width: 95%;
  }
`