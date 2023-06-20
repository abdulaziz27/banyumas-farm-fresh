import React from "react"
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header';
import { Link } from 'react-router-dom';


const Cart = () => {
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
          <tr>
            <td>
              <a href="#">
                <i className="bi bi-x" />
              </a>
            </td>
            <td>
              <img src="assets/img/features/f10.jpg" alt="" />
            </td>
            <td>iu</td>
            <td>Rp.1</td>
            <td>
              <input type="number" defaultValue={1} />
            </td>
            <td>Rp.1</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <i className="bi bi-x" />
              </a>
            </td>
            <td>
              <img src="assets/img/features/f11.jpg" alt="" />
            </td>
            <td>iu</td>
            <td>Rp.1</td>
            <td>
              <input type="number" defaultValue={1} />
            </td>
            <td>Rp.1</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <i className="bi bi-x" />
              </a>
            </td>
            <td>
              <img src="assets/img/features/f12.jpg" alt="" />
            </td>
            <td>iu</td>
            <td>Rp.1</td>
            <td>
              <input type="number" defaultValue={1} />
            </td>
            <td>Rp.1</td>
          </tr>
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
            <td>Rp.3</td>
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
              <strong>Rp.3</strong>
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
  )
}

export default Cart
