import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { deleteProduct, getProducts } from '../Redux/AdminProductReducer/action';
import { AdminProductCard } from './AdminProductCard';

export const AdminProductList = () => {
    const [searchParams] =useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation()
    const {products} = useSelector((store) => store.AdminProductReducer);
    console.log(products)

    let obj = {
        params: {
            gender: searchParams.getAll("category"),
            _sort: searchParams.get("order") && "price",
            _order: searchParams.get("order"),
        },
    }
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
      }


    useEffect(() => {
        dispatch(getProducts(obj))
    }, [location.search]);

  return (
    <DIV>
    {products.length > 0 &&
    products.map((el) => {
        return <AdminProductCard key={el.id} {...el} handleDelete={handleDelete}/>
    })}
    </DIV>
    )
  
}
const DIV = styled.div`
width: 100%;
    /* margin-top: 40px auto; */
    /* margin-left: 30px; */
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
`