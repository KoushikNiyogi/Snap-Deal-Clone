import { ADD_TO_CART } from "./actionTypes";

const initialState = {
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};
