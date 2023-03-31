import axios from "axios";
import {
  PRODUCT_GETREQUEST_FAILURE,
  PRODUCT_GETREQUEST_PENDING,
  PRODUCT_GETREQUEST_SUCCESS,
  UPDATE_PATH,
} from "./actionTypes";

export const updatePath = (data) => (dispatch) => {
  dispatch({ type: UPDATE_PATH, payload: data });
};

export const getProducts = (data, params) => (dispatch) => {
  let obj = {
    params: params,
  };
  dispatch({ type: PRODUCT_GETREQUEST_PENDING });
  axios
    .get(`https://calm-blue-cobra-wig.cyclic.app/products?type=${data}`, obj)
    .then((res) => {
      return dispatch({
        type: PRODUCT_GETREQUEST_SUCCESS,
        payload: [res.data, res.data.length],
      });
    })
    .catch((err) => dispatch({ type: PRODUCT_GETREQUEST_FAILURE }));
};
