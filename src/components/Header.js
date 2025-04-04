import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../components/styles.css"
import { Cart } from "../Context";

const Header = () => {

    const {cart} = useContext(Cart);
    
  return (
    <div>
      
      <ul className="nav">
      <span className="header">React Context API</span>
        <li>
          <Link to="/" className="links">Home Page</Link>
        </li>
        <li>
          <Link to="/cart" className="links">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
