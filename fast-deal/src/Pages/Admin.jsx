import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addData } from '../Redux/AdminProductReducer/action';
import {AdminNavbar} from "../Components/AdminNavbar"
const initialState = {
  id:0,
  type:"",
  name: "",
  price:"",
  "strikeoff-price":"",
  image:[],
  discount:"",
  
  productline:"",
  brand:"",
  rating: {
    rate: "",
    count: "",
  },
}

 const Admin = () => {
  const [product,setProduct] = useState(initialState)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    
    let {name,value} = e.target;
    // console.log(name,value);
    if(name === "image"||name === "image1" || name === "image2"){
        name = "image";
         value = [...product.image,value];
        // value = [...product,value]
       }
    //    if(name==="rating.rate"||name==="rating.count"){
    //     name = "rating.rate"
    //     value = [...product.rating,value]
    //    }
    // if(name===id&&i)
    setProduct((prev) => {
       
        return {...prev, [name]: value}

    })
    console.log(name,value);
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch(addData(product));
    setProduct(initialState)
  }
  return (
    <DIV>
      <AdminNavbar/>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} >
      <input 
            type="number" value={product.id} onChange={(e)=> { handleChange(e)}} name="id" placeholder='Id'/>
        <input 
            type="text" value={product.type} onChange={(e)=> { handleChange(e)}} name="type" placeholder='Type'/>
        <input 
            type="text" value={product.name} onChange={(e)=> { handleChange(e)}} name="name" placeholder='Name'/>
        <input 
            type="number" value={product.price} onChange={(e)=> { handleChange(e)}} name="price" placeholder='Price'/>
        <input 
            type="number" value={product["strikeoff-price"]} onChange={(e)=> { handleChange(e)}} name="strikeoff-price" placeholder='strikeoff-price'/>  
        <input 
            type="number" value={product.discount} onChange={(e)=> { handleChange(e)}} name="discount" placeholder='Discount'/>            
        <input 
            type="text" value={product.image[0]} onChange={(e)=> { handleChange(e)}} name="image" placeholder='image'/>
        <input 
            type="text" value={product.image[1]} onChange={(e)=> { handleChange(e)}} name="image1" placeholder='image'/>
        <input 
            type="text" value={product.image[2]} onChange={(e)=> { handleChange(e)}} name="image2" placeholder='image'/>
        <select name="brand" onChange={(e)=> {handleChange(e)}}>
          <option value="">Select Brand</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          {/* <option value="children">Kids</option> */}
        </select>
        <input 
            type="text" value={product.productline} onChange={(e)=> { handleChange(e)}} name="productline" placeholder='productline'/>
        <input 
            type="text" value={product.color} onChange={(e)=> { handleChange(e)}} name="color" placeholder='color'/>
        <input 
            type="text" value={product.description} onChange={(e)=> { handleChange(e)}} name="description" placeholder='description'/> 
        <input 
            type="number" value={product.quantity} onChange={(e)=> { handleChange(e)}} name="quantity" placeholder='quantity' />
        <input 
            type="number" value={product.rating.rate} onChange={(e)=> { handleChange(e)}} name="rating.rate" placeholder='rating'/>           
        <input 
            type="number" value={product.rating.count} onChange={(e)=> { handleChange(e)}} name="rating.count" placeholder='count'/>    

        <button type='submit'>Submit</button>
      </form>
    </DIV>
    
    
  )
}
export default Admin;
const DIV = styled.div`
width: 400px;
margin:40px  auto;
border: 1px solid gray;
padding: 20px;
font-family: 'Courier New', Courier, monospace;
font-weight: 700;
h2{
  color: #FF1744;
}
input{
  border: 1px solid gray;
}
    .form-1{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    input{
        width: 80%;
        height: 40px;
        font-size: large;
    }
    button{
        width: 20%;
        height: 35px;
        color: white;
        background-color: tomato;
        border-radius: 5px;
        :hover{
          color: #81D4FA;
        }
    }
    form{
      display: flex;
      flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    select{
      width: 50%;
      height: 30px;
      font-size: large;
    }
`