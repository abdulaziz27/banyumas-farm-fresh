import React, { useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Header from "../common/header/Header";
import { Link, useParams } from "react-router-dom";

const Sproduct = () => {
    const { _id } = useParams();
    const [cartItems, setCartItems] = useState(null);
    const [product, setProduct] = useState([]);
    const url = "http://localhost:3000/api/products";

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
            });

        const fetchProductDetails = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/products/${_id}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setCartItems(data);
                } else {
                    throw new Error("Failed to fetch product details");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProductDetails();
    }, [_id]);

    if (!cartItems) {
        return null;
    }

    document.addEventListener("DOMContentLoaded", function () {
        var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");
        if (smallimg.length > 0) {
            smallimg[0].onClick = function () {
                MainImg.src = smallimg[0].src;
            };
            smallimg[1].onClick = function () {
                MainImg.src = smallimg[1].src;
            };
            smallimg[2].onClick = function () {
                MainImg.src = smallimg[2].src;
            };
            smallimg[3].onClick = function () {
                MainImg.src = smallimg[3].src;
            };
        }
    });

    return (
        <>
            <Header />
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img
                        src={cartItems.image}
                        width="100%"
                        id="MainImg"
                        alt=""
                    />
                    <div className="small-img-group">
                        {cartItems.images.map((image, index) => (
                            <div className="small-img-col" key={index}>
                                <img
                                    src={image}
                                    width="100%"
                                    className="small-img"
                                    alt={`Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>Shop / Sproduct</h6>
                    <h4>{cartItems.name}</h4>
                    <h2>Rp. {cartItems.price}</h2>
                    <h4>Stock: {cartItems.countInStock}</h4>
                    <input type="number" defaultValue={1} />
                    <Link to="/Cart">
                        <button className="normal">add to cart</button>
                    </Link>
                    <h4>product details</h4>
                    <span>{cartItems.richDescription}</span>
                </div>
            </section>
            <section id="product1" className="section-p1">
                <h2>iu lainnya</h2>
                <p>cantik banget anjim</p>
                <div className="pro-container">
                    {product.map((item) => (
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
            <Wrapper />
        </>
    );
};

export default Sproduct;
