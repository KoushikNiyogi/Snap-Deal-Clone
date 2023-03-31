import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const AdminProductCard = ({image, name, price, productline, discount, id,handleDelete,rating}) => {
    

  return (
    <DIV >
    <img src = {image[1]} alt={name}/>
    <h3>{name}</h3>
    <h3>Price: {price}</h3>
    <p>Strickoff-price: {"strickoff-price"}</p>
    <p>Brand: {productline}</p>
    <p>Discount: {discount}%</p>
    <p>Rating: {rating.rate} ⭐</p>
    <button className='editbtn'>
        <Link to={`/edit/${id}`}>Edit</Link>
    </button>
    <button onClick={()=>handleDelete(id)} >
         Delete
    </button>
    </DIV>
  )
}
const DIV = styled.div`
    border: 1px solid gray;
    padding: 10px;
    width: 300px;
    img{
        width: 100%;
        height: 200px;
    }
    .editbtn{
        text-decoration: none;
    }
`