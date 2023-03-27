import React from 'react';
import  './Product.css';

const Product = (props) => {
    console.log(props);
    const {img,ratings,price, name, seller, quantity} = props.product;
    return (
        <div className='product'>
            <img src={img}/>
            <div className="cart">
            <h5 className='product-name'>{name}</h5>
            <p className='product-price'>Price: {price}</p>
            <p className='product-manufac'>Manufacturer: {seller}</p>
            <p className='product-rating'>Ratings: {ratings} Stars</p>
            </div>
        </div>
    );
};

export default Product;