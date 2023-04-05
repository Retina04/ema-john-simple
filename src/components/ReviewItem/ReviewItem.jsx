import React from 'react';
import cartLoaderProducts from '../../Loaders/cartProductsLoader';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id ,img,name,price,quantity}=product;
    return (
        <div className='Review-Item'>
          <img src={img} alt="" />
          <div className='Review-Details'>
            <p className='Product-title'>{name}</p>
            <p>Price : <span className='orange-text'>${price}</span></p>
            <p>Order Quantity : <span className='orange-text'>{quantity}</span></p>

          </div>
          <button 
          onClick={()=>handleRemoveFromCart(id)}
          className='btn-delete'>
          <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;