import axios from "axios"
import{
    PRODUCT_GETREQUEST_FAILURE,
    PRODUCT_GETREQUEST_PENDING,
    PRODUCT_GETREQUEST_SUCCESS
} from "./actionTypes"


export const getProducts = (data)=>(dispatch)=>{
  dispatch({type: PRODUCT_GETREQUEST_PENDING})
  axios.get(`https://calm-blue-cobra-wig.cyclic.app/products/${data}`)
  .then((res)=>{
    console.log(res);
    return dispatch({type : PRODUCT_GETREQUEST_SUCCESS, payload : [res.data.items,res.data.items.length]})
})
  .catch((err)=>dispatch({type : PRODUCT_GETREQUEST_FAILURE}))
}