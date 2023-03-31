import axios from "axios";
import { ADD_TO_CART } from "./actionTypes";

const addToCartAction = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const addToCart = (id) => (dispatch) => {
  // Complete add to cart store functionality
  return axios
    .get(`https://calm-blue-cobra-wig.cyclic.app/products/${id}`)
    .then((res) => {
      dispatch(addToCartAction(res.data));
    });
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}
