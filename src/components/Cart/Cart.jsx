import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props.cart;
  // const {cart} = props
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity === 1;
      // product.quantity= product.quantity || 1;
    // }
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + tax + shipping;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items : {quantity}</p>
      <p>Total price : {total}</p>
      <p>Total Shipping : {shipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h6>Grand Total : {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
