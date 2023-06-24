import React, { useState, useEffect } from "react";
import Home from "../components/mainpage/Home";
import Wrapper from "../components/wrapper/Wrapper";
import { Link } from "react-router-dom";
import Header from "../common/header/Header";

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);
    const url = "http://localhost:3000/api/products";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCartItems(data);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
            });
    }, []);

    return (
        <>
            <Header />
            <Home />
            <section id="page-header">
                <h2>LEE JI EUN</h2>
                <p>IU LOVE</p>
            </section>
            <section id="product1" className="section-p1">
                <div className="pro-container">
                    {cartItems.map((item) => (
                        <div
                            className="pro"
                            onclick="window.location.href='sproducts.html';"
                        >
                            <Link to={`/sproduct/${item._id}`}>
                                <img src={item.image} alt="" />
                            </Link>
                            <div className="des">
                                <span>{item.brand}</span>
                                <Link to={`/sproduct/${item._id}`}>
                                    <div>{item.name}</div>
                                </Link>
                                <div className="star">
                                    {Array.from(
                                        { length: item.rating },
                                        (_, index) => (
                                            <i
                                                key={index}
                                                className="bi bi-star-fill"
                                            />
                                        )
                                    )}
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
            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">
                    <i className="bi bi-arrow-right-short" />
                </a>
            </section>
            <Wrapper />
        </>
    );
};

export default Shop;
