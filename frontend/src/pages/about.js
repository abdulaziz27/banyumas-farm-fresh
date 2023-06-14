import React, { Fragment } from 'react'
import Menu from '../components/menu';

function About() {
  return (
    <Fragment>
        
    <Menu/>
  <section id="page-header" className="about-header">
    <h2 style={{ color: "rgb(255 , 255, 255)" }}>#Know Us</h2>
    <p style={{ color: "rgb(255, 255, 255)" }}>know about iu</p>
  </section>
  <section id="about-head" className="section-p1">
    <img src="assets/img/features/f10.jpg" alt="" />
    <div>
      <h2>who is iu?</h2>
      <p>
        IU, also known as Lee Ji-eun, is a South Korean singer, songwriter, and
        actress. She gained popularity in the Korean music industry with her
        debut album, "Lost and Found," released in 2008. IU is known for her
        versatile vocal range and has achieved numerous chart-topping hits
        throughout her career.
      </p>
      <abbr title="">
        meski kau kini jauh disana kita memandang langit yang sama
      </abbr>
      <br />
      <br />
      <marquee bgcolor="red" loop={-1} scrollamount={5} width="100%">
        meski kau kini jauh disana kita memandang langit yang sama
      </marquee>
    </div>
  </section>
  <section id="about-app" className="section-p1">
    <h1>
      download our <a href="#">app</a>
    </h1>
    <div className="video">
      <img src="assets/img/about/giphy.gif" alt="" />
    </div>
  </section>
  <section id="feature" className="section-p1">
    <div className="fe-box">
      <img src="assets/img/features/f1-removebg-preview.png" alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
      <img src="assets/img/features/f2.jpg" alt="" />
      <h6>Online Order</h6>
    </div>
    <div className="fe-box">
      <img src="assets/img/features/f6.jpg" alt="" />
      <h6>Save Money</h6>
    </div>
    <div className="fe-box">
      <img src="assets/img/features/f4.jpg" alt="" />
      <h6>Promotion</h6>
    </div>
    <div className="fe-box">
      <img src="assets/img/features/f5.jpg" alt="" />
      <h6>Support</h6>
    </div>
  </section>
  <section id="newslatter" className="section-p1 section-m1">
    <div className="newstext">
      <h4>Sign Up</h4>
      <p>
        get email for <span>special offers</span>
      </p>
    </div>
    <div className="form">
      <input type="text" placeholder="your email address" />
      <button className="normals">signup</button>
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
        <img src="assets//img/pay/play.jpg" alt="" />
      </div>
      <p>secured payment gateaways</p>
      <img src="assets/img/pay/pay.png" alt="" />
    </div>
    <div className="copyright">
      <p>@ 2023, agyl aziz ashir - RPL PAK CAHYO</p>
    </div>
  </footer>

    </Fragment>
  )
}

export default About;