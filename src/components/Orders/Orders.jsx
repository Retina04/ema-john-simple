import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
  const saveCart = useLoaderData();
 // console.log(saveCart);
  const[cart , setCart]=useState(saveCart)
  const handleRemoveFromCart =(id)=>{
    const remaining = cart.filter(product=>product.id !== id);
    setCart(remaining)
    removeFromDb(id)

  }
  const handleClearCart= ()=>{
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {/* <h2>order</h2> */}
        {
                cart.map(product=><ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem>)
            }
        
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        >
        
       <Link className="proceed" to='/checkout'>
        <button className="btn-proceed">
          Proceed Checkout
        <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>

       </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
