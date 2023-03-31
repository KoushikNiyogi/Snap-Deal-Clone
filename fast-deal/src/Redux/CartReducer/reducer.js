import { json } from "react-router-dom";
import { ADD_TO_CART } from "./actionTypes";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart"))||[],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      localStorage.setItem("cart",JSON.stringify([...state.cart,payload]));
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};
