import React from "react";
import {  Link } from "react-router-dom";
import './style.css';

const Navbar = () =>{
  return (
    <nav>
      <li>
        <Link to="/" className="logo">B</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/promotions">Promotions</Link>
      </li>
      <li>
        <Link to="/newsletter" className="">Newsletters</Link>
      </li>
    </nav>
  );
}
export default Navbar;