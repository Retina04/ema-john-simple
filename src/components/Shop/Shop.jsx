import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log(storedCart)
    const savedCart = [];
    //step :1 get the id
    for (const id in storedCart) {
      //step-2 get the product by id
      const savedProduct = products.find((product) => product.id === id);
      //step-3 get quantity of the product
      if (savedProduct) {
        const quantity = storedCart[id];
        savedProduct.quantity = quantity;
        savedCart.push(savedProduct);
      }
    }
    //step-5 saved the card
    setCart(savedCart);
  }, [products]);
  //   const handleAddToCart = (product) => {
  //     //const newCart = [...cart, product];
  //    // cart.push(product);
  //    let newCart =[];
  //    const exits = cart.find(pd =>pd.id===product.id);
  //     if(!exits){
  //         product.quantity = 1;
  //          newCart = [...cart, product];
  //     }
  //     else{
  //         exits.quantity = exits.quantity + 1;
  //         const remaining = cart.filter(pd =>pd.id !==product.id)
  //         newCart =[...remaining,exits]
  //     }

  //    }
  //     //if product doesn't exit in the cart then set quantity = 1
  //     //if exit update the quantity by 1
  //     setCart(newCart);
  //     addToDb(product.id);
  //   };
  const handleAddToCart = (product) => {
    // cart.push(product);
    // const newCart = [...cart, product];
    // setCart(newCart);
    let newCart = [];
    const exits = cart.find((pd) => pd.id === product.id);
    if (!exits) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exits.quantity = exits.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exits];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = ()=>{
    setCart([]);
    deleteShoppingCart();
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
     
        <Cart 
         handleClearCart={handleClearCart}
        cart={cart}>
          <Link className="proceed" to='/orders'>
            <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
