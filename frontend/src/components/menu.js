import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./menu.css"
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {

  const navRef = useRef();

  const shownavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };



  return (
    <header>
    <h3>lgog</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className='nav-btn nav-close-btn' onClick={shownavbar}>
          <FaTimes/>
        </button>
      </nav>
        <button className='nav-btn' onClick={shownavbar}>
          <FaBars/>
        </button>
    </header>
  );
}

export default Menu;