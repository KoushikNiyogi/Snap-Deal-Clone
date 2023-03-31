import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cartReducer.cart);
  console.log(cartItems, "here is tour cart page data");
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
