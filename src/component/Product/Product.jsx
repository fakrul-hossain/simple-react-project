import React from 'react';
import  './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {img,ratings,price, name, seller, quantity} = props.product;

   const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img}/>
            <div className="cart">
            <h5 className='product-name'>{name}</h5>
            <p className='product-price'>Price: {price}</p>
            <p className='product-manufac'>Manufacturer: {seller}</p>
            <p className='product-rating'>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='button'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;