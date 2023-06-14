import React, { Fragment } from 'react'
import Menu from '../components/menu'
function Cart() {
  return (
    <Fragment>
        <>
    <Menu/>
  <section id="page-header" className="contact-header">
    <h2 style={{ color: "rgb(255 , 255, 255)" }}>#Lets talk</h2>
    <p style={{ color: "rgb(255, 255, 255)" }}>talk about iu</p>
  </section>
  <section id="cart" className="">
    <footer className="section-p1">
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
    </footer>
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
      <button className="normal">proceed to checkout</button>
    </div>
  </section>
  <footer className="section-p1">
    <div className="col">
      <img src="assets/img/Bj.png" className="logo" alt="" />
      <h4>contact</h4>
      <p>
        {" "}
        <strong>address: </strong> sad
      </p>
      <p>
        <strong>phone: </strong> sad
      </p>
      <p>
        <strong>hours: </strong> sda
      </p>
      <div className="follow">
        <h4>follow is</h4>
        <div className="icon">
          <i className="bi bi-facebook" />
          <i className="bi bi-twitter" />
          <i className="bi bi-instagram" />
          <i className="bi bi-youtube" />
        </div>
      </div>
    </div>
    <div className="col">
      <h4>about</h4>
      <a href="#">about us</a>
      <a href="#">delivery info</a>
      <a href="#">privacy policy</a>
      <a href="#">terms and condition</a>
      <a href="#">contact us</a>
    </div>
    <div className="col">
      <h4>my account</h4>
      <a href="#">sign in</a>
      <a href="#">view cart</a>
      <a href="#">my wishlist</a>
      <a href="#">track my order</a>
      <a href="#">help</a>
    </div>
    <div className="col install">
      <h4>install app</h4>
      <p>from app store or google play</p>
      <div className="row">
        <img src="assets/img/pay/app.jpg" alt="" />
        <img src="assets/img/pay/play.jpg" alt="" />
      </div>
      <p>secured payment gateaways</p>
      <img src="assets/img/pay/pay.png" alt="" />
    </div>
    <div className="copyright">
      <p>@ 2023, agyl aziz ashir - RPL PAK CAHYO</p>
    </div>
  </footer>
</>
    </Fragment>
  )
}

export default Cart