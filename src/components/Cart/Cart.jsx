import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart , handleClearCart }) => {
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
      <button 
      onClick={handleClearCart}
      className="btn-clear-cart">
        <span >Clear Cart</span>
      <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Cart;
