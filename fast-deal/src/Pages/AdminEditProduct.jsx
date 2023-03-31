import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { editProduct, getProducts } from '../Redux/AdminProductReducer/action';
const initialState = {
  name: "",
  image:[],
  discount:"",
  price:"",
  productline:"",
  brand:"",
  rating: {
    rate: "",
  },

}
const AdminEditProduct = () => {
  const {id} = useParams();
  
  const [data, setData] = useState(initialState);
  const [success, setSuccess] = useState(false);


  const {products} = useSelector((store) => store.AdminProductReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let {name, value} =e.target;

    // console.log(name,value);
    if(name === "image"||name === "image1" || name === "image2"){
        name = "image";
        value = [...products.image,value];
       }
    // value = [...products.image,value];
    setData(prev => {
      return {...prev, [name]: value}
    })
    
  }
  
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editProduct(data, id))
    .then(() => {
      setSuccess(true);
    })
  }

  useEffect(() => {
    const parsedId = typeof id === "string" ? parseInt(id) : +id;
    const data = products.find((el) => el.id === parsedId);
    setData(data);
    console.log("sjdfjasd");
  }, [id,products]);
  console.log(data,"data");
  
console.log(products,"products")
  return (
    <DIV>
      <h3>Edit Product: {id}</h3>
      <h2>{success && "Product Edited Successfully!!"} </h2>
      <form onSubmit={handleEdit}>
        <input type="text" name={"image"} onChange={handleChange} value={data.image[0]}/>
        <input type="text" name={"name"} onChange={handleChange} value={data.name}/>
        <input type="number" name={"price"} onChange={handleChange} value={data.price}/>
        <input type="text" name={"productline"} onChange={handleChange} value={data.productline}/>
        <input type="number" name={"discount"} onChange={handleChange} value={data.discount}/>
        <select name="brand" onChange={handleChange} value={data.gender}>
          <option value="">Select Gender</option>
          <option value="Mens">Men</option>
          <option value="Womens">Women</option>
          {/* <option value="children">Kids</option> */}
        </select>
        
        <button type='submit'>Edit</button>
        
      </form>
    </DIV>
  )
}
export default AdminEditProduct
const DIV = styled.div`
width: 400px;
margin:40px  auto;
border: 1px solid gray;
padding: 20px;
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
        border: 1px solid gray;
    }
    button{
        width: 40%;
        height: 35px;
        border: 1px solid black;
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