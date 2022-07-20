import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./Screens/homeScreen";
import ProductScreen from "./Screens/productScreen";
import CartScreen from "./Screens/cartScreen.js";
import ContactScreen from "./Screens/contactScreen.js";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart;
  return (
    <Router>
    <div className="grid-container">
      <header className ="row">
        <div>
        <Link className = "brand" to="/">
          <img className="logo_web" src="../images/logo_web.jpg" ></img>
          SHOBEE</Link>
        </div>
        <div>
            <Link to="/cart">
            <span className="fa fa-shopping-cart">
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </span>
          </Link>
        </div>
        <div>
          <Link to="/contact">
          <span className="fa fa-question-circle-o">
            Contact
           </span> 
          </Link>  
        </div>
      </header>
      <main>
        <Routes> 
          <Route path='/' element={<HomeScreen/>} exact></Route>
          <Route path='/products/:id' element={<ProductScreen/>} exact></Route>
          <Route path='/cart/:id' element={<CartScreen/>} exact></Route>
          <Route path='/cart' element={<CartScreen/>} exact></Route>  
          <Route path='/contact' element={<ContactScreen/>} exact></Route>                
        </Routes>
      </main>
      <footer className="row center">
            All Right Resserved
      </footer>  
    </div>
    </Router>
  );
}

export default App;
