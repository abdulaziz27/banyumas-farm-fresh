import React, { Fragment } from 'react'
import Menu from '../components/menu'
function Contact() {
  return (
    <Fragment>
        <>
    <Menu/>
  <section id="page-header" className="contact-header">
    <h2 style={{ color: "rgb(255 , 255, 255)" }}>#Lets talk</h2>
    <p style={{ color: "rgb(255, 255, 255)" }}>talk about iu</p>
  </section>
  <section id="contact-detail" className="section-p1">
    <div className="details">
      <span>Get in touch</span>
      <h2>visit our basecamp</h2>
      <h3>head office</h3>
      <div>
        <li>
          <i className="bi bi-map" />
          <p>jl bahagia</p>
        </li>
        <li>
          <i className="bi bi-envelope" />
          <p>agyl1restu@gmail.com</p>
        </li>
        <li>
          <i className="bi bi-telephone" />
          <p>0895334845184</p>
        </li>
        <li>
          <i className="bi bi-clock" />
          <p>monday to sunday: 9 am to 16 pm</p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2708044740075!2d109.24651767328348!3d-7.435257773250553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ea49d9f9885%3A0x62be0b6159700ec9!2sInstitut%20Teknologi%20Telkom%20Purwokerto!5e0!3m2!1sid!2sid!4v1686488500649!5m2!1sid!2sid"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
  <section id="form-details">
    <form action="">
      <span>leave a message</span>
      <h2>we love to hear from you</h2>
      <input type="text" placeholder="your name" />
      <input type="text" placeholder="e-mail" />
      <input type="text" placeholder="subject" />
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="yout message"
        defaultValue={"\n                "}
      />
      <button className="normal">submit</button>
    </form>
    <div className="people">
      <div>
        <img src="assets/img/features/f2.jpg" alt="" />
        <p>
          <span>iu</span> singer <br /> phone : secret <br /> email : secret
        </p>
      </div>
      <div>
        <img src="assets/img/features/f3.jpg" alt="" />
        <p>
          <span>iu</span> singer <br /> phone : secret <br /> email : secret
        </p>
      </div>
      <div>
        <img src="assets/img/features/f4.jpg" alt="" />
        <p>
          <span>iu</span> singer <br /> phone : secret <br /> email : secret
        </p>
      </div>
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

export default Contact