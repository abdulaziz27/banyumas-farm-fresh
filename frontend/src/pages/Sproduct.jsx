import React, { useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Header from "../common/header/Header";
import { Link, useParams } from "react-router-dom";

const Sproduct = () => {
    const { _id } = useParams();
    const [cartItems, setCartItems] = useState(null);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
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

    const handleSmallImgClick = (imageSrc) => {
        setCartItems((prevState) => ({
            ...prevState,
            image: imageSrc,
        }));
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
        const { _id, name, price } = cartItems;

        fetch("http://localhost:3000/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity,
                product: {
                    _id,
                    name,
                    price,
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Product added to cart:", data);
            })
            .catch((error) => {
                console.error("Error adding product to cart:", error);
            });
    };

    if (!cartItems) {
        return null;
    }

    return (
        <>
            <Header />
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={cartItems.image} width="100%" id="MainImg" alt="" />
                    <div className="small-img-group">
                        {cartItems.images.map((image, index) => (
                            <div className="small-img-col" key={index}>
                                <img
                                    src={image}
                                    width="100%"
                                    className="small-img"
                                    alt={`Image ${index + 1}`}
                                    onClick={() => handleSmallImgClick(image)}
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
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button className="normal" onClick={handleAddToCart}>
                        add to cart
                    </button>
                    <h4>product details</h4>
                    <span>{cartItems.richDescription}</span>
                </div>
            </section>
            <section id="product1" className="section-p1">
                <h2>iu lainnya</h2>
                <p>cantik banget anjim</p>
                <div className="pro-container">
                    {product.map((item) => (
                        <div className="pro" key={item._id}>
                            <Link to={`/sproduct/${item._id}`}>
                                <img src={item.image} alt="" />
                            </Link>
                            <div className="des">
                                <span>{item.brand}</span>
                                <Link to={`/sproduct/${item._id}`}>
                                    <div>{item.name}</div>
                                </Link>
                                <div className="star">
                                    {Array.from({ length: 5 }, (_, index) => {
                                        if (index < Math.floor(item.rating)) {
                                            return <i key={index} className="bi bi-star-fill" />;
                                        } else if (index === Math.floor(item.rating) && item.rating % 1 !== 0) {
                                            return <i key={index} className="bi bi-star-half" />;
                                        } else {
                                            return <i key={index} className="bi bi-star" />;
                                        }
                                    })}
                                </div>
                                <h4>Rp. {item.price}</h4>
                            </div>
                            <Link to="#">
                                <i className="bi bi-cart2 cart" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <Wrapper />
        </>
    );
};

export default Sproduct;