import { CART_ADD_ITEM ,CART_REMOVE_ITEM,CART_PROCESS_ITEM} from "../Constaint/cartConstaint";
import Axios from 'axios';
export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    const {
      cart: { cartItems },
    } = getState();
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          product: data._id,
          seller: data.seller,
          qty,
        },
      });
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    //}
  };

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };  
  export const processCart = () => (dispatch, getState) => {
    dispatch({ type: CART_PROCESS_ITEM });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };   

