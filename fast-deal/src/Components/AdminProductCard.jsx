import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const AdminProductCard = ({image, name, price, productline, discount, id,handleDelete,rating}) => {
    

  return (
    <DIV >
    <img src = {image[0]} alt={name}/>
    <h3>{name}</h3>
    <h3>Price: {price}</h3>
    <p>Strickoff-price: {"strickoff-price"}</p>
    <p>Brand: {productline}</p>
    <p>Discount: {discount}%</p>
    <p>Rating: {rating.rate} ⭐</p>
    <div className='btn'>
    <button className='editbtn'>
        <Link to={`/edit/${id}`}>Edit</Link>
    </button>
    <button className='dlbtn' onClick={()=>handleDelete(id)} >
         Delete
    </button>
    </div>
    
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
        width: 60px;
        margin: auto;
        text-decoration: none;
        margin-left: 20px;
        margin-right: 100px;
        color: white;
        background-color: tomato;
    }
    .dlbtn{
        width: 60px;
        color: white;
        background-color: tomato;
    }
`