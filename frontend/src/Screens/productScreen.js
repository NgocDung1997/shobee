import React, { useEffect } from 'react'
import ProductDetail from '../Componant/productDetail';
import LoadingBox from "../Componant/loadingBox"
import MessageBox from "../Componant/messageBox"
import { useSelector,useDispatch } from 'react-redux';
import { detailsProduct } from '../Action/productAction';
import { useParams } from 'react-router-dom';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId =  useParams().id
  const productDetails = useSelector((state) => state.productDetails)
  const {loading, error, product} = productDetails
  function checkoutHandler(){
    
  }
  useEffect(() => {
    dispatch(detailsProduct(productId))
    },[dispatch,productId])
return (
      <div>    
        {loading?(<LoadingBox></LoadingBox>) 
        :error?
              (<MessageBox variant="error">{error}</MessageBox>) 
        :(
        <div className="row center">   
            {  
              <ProductDetail key={product._id} product = {product}></ProductDetail> 
          }
        </div>
        )
      }
      </div> 
    )}
