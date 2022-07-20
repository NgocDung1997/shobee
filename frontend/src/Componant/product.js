import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

export default function Product(pros) {
    const {product} = pros
    //let pathProductDetail = '/products/'+ product._id
  return (
    <div key={product._id} className="card">
      <Link to={`/products/${product._id}`} >
          <img className = "medium product-img" src={product.image} alt={product.name}/>
      </Link>
        <div className="card-body">
        <Link to={`/products/${product._id}`} >
                <h2>{product.name}</h2>
            </Link>
            <Rating 
              rating = {product.rating} 
              numbReview = {product.numReviews}>
            </Rating>
            <div className="price">${product.price}</div>
        </div>
    </div>
  )
}
