import React, { useState } from 'react';
import Rating from './rating';
import { useNavigate } from 'react-router-dom';

export default function ProductDetail(pros) {
  const {product} = pros  
  const [qty, setQty] = useState(1)
  const productId = product._id

  const navigate = useNavigate();   
  function addToCardHandler () {
     navigate(`/cart/${productId}?qty=${qty}`)
  }
  return (
    <div key={product._id} >
        <div className="row top">
            <div className='col-1'>
            <img className='large'src={product.image} alt={product.name}/>                          
            </div>
            <div className='col-2'>
            <ul className='proInfo'>
            <li>
                <h1>{product.name}</h1>
            </li> 
            <li>
                <Rating rating = {product.rating} numbReview = {product.numReviews}></Rating>
            </li>
            <li>
                Price : ${product.price}
            </li>
            <li>
                Description : 
            </li>
            <li>
                {product.description}
            </li>
            </ul>
            </div>
            <div className='col-3'>
            <div className='card card-body'>
                <ul>
                <li>
                    <div className='row'>
                        <div>Price</div>
                        <div className='price'>${product.price}</div>
                    </div>
                </li>
                <li>
                    <div className='row'>
                        <div>Status</div>
                        <div>
                        {product.countInStock>0
                        ?<span className='Success'> In Stock</span>
                        :<span className='Error'> UnAvailable</span>}  
                        </div>
                    </div>
                </li>
                <li>
                <div className='row'>
                    <div>Quantity</div>
                    <div>
                    {product.countInStock>0
                            ?<span>{product.countInStock}</span>
                            :<span></span>
                    }
                    </div>
                </div>    
                </li>                       
                {
                        product.countInStock > 0 && (
                            <>
                                <div className='row'>
                                    <div>Qty</div>
                                    <div>
                                        <select value={qty} onChange={e=> setQty(e.target.value)}>
                                       {
                                        [...Array(product.countInStock).keys()].map(x => (
                                                <option key ={x+1} value={x + 1}> {x + 1}</option> 
                                        ))
                                        }
                                        </select>
                                    </div>    
                                </div>
                                <li>
                                    <button onClick={addToCardHandler} className='primary block'>Add to cart</button>
                                </li>
                            </>
                        )
                }                  
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}
