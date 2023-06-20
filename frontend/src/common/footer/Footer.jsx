import React from "react"
import "./style.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Shopy</h1>
            <p>Shopy adalah sebuah platform e-commerce yang didedikasikan untuk sektor pertanian dan perkebunan.</p>   
          </div>

          <div className='box'>
            
            <h2>About Us</h2>
            <ul>
            <Link to="/Blog">
              <li>Blog</li>
              </Link>
              <li>Delivery Info</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
          
            <h2>My Account</h2>

            <ul>
            <Link to="/Login">
              <li>Login </li>
              </Link>
              <Link to="/Register">
              <li>Register</li>
              </Link>
              <Link to="/Cart">
              <li>Cart</li>
              </Link>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Jl. BAHAGIA HARI INI  </li>
              <li>Email: RAHASIA</li>
              <li>Phone: 69696969</li>
            </ul>
          </div>

        </div>
        <div className="copyright">
            <p>@ 2023, agyl aziz ashir - RPL PAK CAHYO</p>
          </div>
      </footer>
    </>
  )
}

export default Footer
