import React, { useEffect, useState } from 'react';
import Wrapper from "../components/wrapper/Wrapper";
import Header from '../common/header/Header';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/cart');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateCartSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      const itemSubtotal = calculateSubtotal(item.product.price, item.quantity);
      subtotal += itemSubtotal;
    });
    return subtotal;
  };

  const handleQuantityChange = async (e, itemId) => {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity < 1) {
      e.target.value = 1;
      return;
    }

    const existingCartItem = cartItems.find((item) => item._id === itemId);

    if (existingCartItem) {
      const maxQuantity = existingCartItem.product.countInStock;
      if (newQuantity > maxQuantity) {

        e.target.value = maxQuantity;
        return;
      }

      existingCartItem.quantity = newQuantity;
      setCartItems([...cartItems]);

      try {
        await fetch(`http://localhost:3000/api/cart/${itemId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: existingCartItem.quantity }),
        });
        fetchCartItems();
      } catch (error) {
        console.error(error);
      }
    } else {
      const response = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: itemId, quantity: newQuantity }),
      });
      const data = await response.json();
      setCartItems([...cartItems, data]);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await fetch(`http://localhost:3000/api/cart/${itemId}`, {
        method: 'DELETE',
      });
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <section id="cart" className="">
        <div className="section-p1">
          <table width="100%">
            <thead className="">
              <tr>
                <td>remove</td>
                <td>image</td>
                <td>product</td>
                <td>price</td>
                <td>quantity</td>
                <td>subtotal</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <a href="#" onClick={() => handleRemoveItem(item._id)}>
                      <i className="bi bi-x" />
                    </a>
                  </td>
                  <td>
                    {item.product.hasOwnProperty('image') ? (
                      <img src={item.product.image} alt="" />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      max={item.product.stock}
                      onChange={(e) => handleQuantityChange(e, item._id)}
                    />
                  </td>
                  <td>{calculateSubtotal(item.product.price, item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>apply coupon</h3>
          <div>
            <input type="text" placeholder="enter your coupon" />
            <button className="normal">apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>cart totals</h3>
          <table>
            <tbody>
              <tr>
                <td>cart subtotal</td>
                <td>Rp.{calculateCartSubtotal()}</td>
              </tr>
              <tr>
                <td>shipping</td>
                <td>free</td>
              </tr>
              <tr>
                <td>
                  <strong>total</strong>
                </td>
                <td>
                  <strong>Rp.{calculateCartSubtotal()}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/Checkout">
            <button className="normal">proceed to checkout</button>
          </Link>
        </div>
      </section>
      <Wrapper />
    </>
  );
};

export default Cart;