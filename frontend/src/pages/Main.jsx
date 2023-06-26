import React, { useState, useEffect } from "react";
import Home from "../components/mainpage/Home";
import Wrapper from "../components/wrapper/Wrapper";
import Header from "../common/header/Header";
import { Link } from "react-router-dom";

const Pages = () => {
  const [cartItems, setCartItems] = useState([]);
  const url = "http://localhost:3000/api/products";

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const featuredProducts = cartItems.filter(item => item.isFeatured === true);

  return (
    <>
      <Header />
      <section id="banner" className="section-m1">
        <h4>Service</h4>
        <h2>
          up to <span>1% off</span> - all products
        </h2>
        <Link to="/Shop">
          <button className="normal">Explore More</button>
        </Link>
      </section>
      <Home />
      <section id="product1" className="section-p1">
        <h2 style={{ marginTop: "50px" }}>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {cartItems.map((item, index) => (
            <div className="pro" key={index}>
              <Link to={`/sproduct/${item._id}`}>
                <img src={item.image} alt="" />
              </Link>
              <div className="des">
                <span>{item.brand}</span>
                <Link to={`/sproduct/${item._id}`}>
                  <h5>{item.name}</h5>
                </Link>
                <div className="star">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <i key={index} className="bi bi-star-fill" />
                  ))}
                  <h4>Rp. {item.price}</h4>
                </div>
              </div>
              <a href="#">
                <i className="bi bi-cart2 cart" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="sm-banner"
        className="section-p1"
        style={{ paddingTop: "100px" }}
      >
        <div className="banner-box">
          <h4>crazy banner</h4>
          <h2>buy 2 get 1 free</h2>
          <span>The fresh fruit and vegetables</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>crazy banner</h4>
          <h2>buy 2 get 1 free</h2>
          <span>The fresh fruit and vegetables</span>
          <button className="white">Learn More</button>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Product</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {featuredProducts.map((item, index) => (
            <div className="pro" key={index}>
              <Link to={`/sproduct/${item._id}`}>
                <img src={item.image} alt="" />
              </Link>
              <div className="des">
                <span>{item.brand}</span>
                <Link to={`/sproduct/${item._id}`}>
                  <h5>{item.name}</h5>
                </Link>
                <div className="star">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <i key={index} className="bi bi-star-fill" />
                  ))}
                </div>
                <h4>Rp. {item.price}</h4>
              </div>
              <a href="#">
                <i className="bi bi-cart2 cart" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>buy 2 get 1 free</h2>
          <h3>50% off</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>buy 2 get 1 free</h2>
          <h3>50% off</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>buy 2 get 1 free</h2>
          <h3>50% off</h3>
        </div>
      </section>
      <Wrapper />
    </>
  );
};

export default Pages;