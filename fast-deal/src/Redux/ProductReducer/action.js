import axios from "axios";
import {
  PRODUCT_GETREQUEST_FAILURE,
  PRODUCT_GETREQUEST_PENDING,
  PRODUCT_GETREQUEST_SUCCESS,
  UPDATE_PATH,
  TOTAL_ITEMS
} from "./actionTypes";

export const updatePath = (data) => (dispatch) => {
  dispatch({ type: UPDATE_PATH, payload: data });
};

export const getTotalitems =(data)=>(dispatch)=>{
  axios.get(`https://tan-jolly-dolphin.cyclic.app/products?type=${data}`)
  .then((res)=>dispatch({type:TOTAL_ITEMS,payload : res.data.length}))
  .catch((err)=>console.log(err));
}

export const getProducts = (data, params) => (dispatch) => {
  let obj = {
    params: params,
  };
  dispatch({ type: PRODUCT_GETREQUEST_PENDING });
  axios
    .get(`https://tan-jolly-dolphin.cyclic.app/products?type=${data}`, obj)
    .then((res) => {
      return dispatch({
        type: PRODUCT_GETREQUEST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: PRODUCT_GETREQUEST_FAILURE }));
};
