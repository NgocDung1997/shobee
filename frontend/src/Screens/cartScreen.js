import React, { useEffect } from 'react'
import { Link, useLocation,useParams} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import {addToCart} from '../Action/cartAction'
import {removeFromCart,processCart} from '../Action/cartAction'
import MessageBox from '../Componant/messageBox';

export default function CartScreen(props) {
    const params = useParams();
    const { id: productId } = params;
    // let productId = location.pathname.split('=')[1]
    // let qty = location.pathname.split('=')[2]
    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, [dispatch, productId, qty]);
    
    const removeFromCartHandler = (id) => {
      // delete action
      dispatch(removeFromCart(id));
    };

    const processCartHandler = () => {
      // delete action
      dispatch(processCart());
    };

    return (
    <div>
       <div className='row top'>
          <div className='col-2'>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ?
            <MessageBox>
              Cart is Empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
            :
            (
              <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                    <div>${item.price}</div>
                  </div>
                </li>
              ))}
            </ul>
            )}
           <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={() => processCartHandler()}
                className="primary block"
                disabled={cartItems.length === 0}               
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
          </div>
       </div>
    </div>
  )
}

