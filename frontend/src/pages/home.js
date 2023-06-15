import React from 'react';


class Home extends React.Component{
    render(){
        return(
            <>
  <section id="header">
    <a href="index.html">
      <img src="assets/img/Bj.png" className="logo" alt="" />
    </a>
    <div>
      <ul id="navbar">
        <li>
          <a className="active" href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="shop.html">Shop</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <form className="d-flex">
          <input
            className="px-2 search"
            type="search"
            placeholder="search"
            aria-label="search"
          />
          <button className="btn0" type="submit">
            <i className="bi bi-search" />
          </button>
        </form>
        <li id="account">
          <a href="account.html">
            <i className="bi bi-person" />
          </a>
        </li>
        <a href="account.html"></a>
        <li id="bag">
          <a href="account.html" />
          <a href="cart.html">
            <i className="bi bi-cart-fill" />
          </a>
        </li>
        <a href="cart.html"></a>
        <a href="#" id="close">
          <i className="bi bi-x" />
        </a>
      </ul>
    </div>
    <div id="mobile">
      <form className="d-flex">
        <input
          className="px-2 search"
          type="search"
          placeholder="search"
          aria-label="search"
        />
        <button className="btn0" type="submit">
          <i className="bi bi-search" />
        </button>
      </form>
      <a href="account.html">
        <i className="bi bi-person" />
      </a>
      <a href="cart.html">
        <i className="bi bi-cart-fill" />{" "}
      </a>
      <i id="bar" className="bi bi-three-dots" />
    </div>
  </section>
  <section id="hero">
    <h4>Fruits and Vegetables</h4>
    <h2>From off the shelf to</h2>
    <h1>on the table</h1>
    <p>Serve direct-to-consumer experiences with the commerce </p>
    <p>platform built for change.</p>
    <a href="shop.html">
      <button>Shop Now </button>
    </a>
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
  <section id="product1" className="section-p1">
    <h2>Featured Product</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img src="assets/img/features/f3.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f7.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f8.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f9.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f10.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f11.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f12.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f13.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f14.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
    </div>
  </section>
  <section id="banner" className="section-m1">
    <h4>Service</h4>
    <h2>
      up to <span>1% off</span> - all products
    </h2>
    <button className="normal">Explore More</button>
  </section>
  <section id="product1" className="section-p1">
    <h2>New Arivals</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img src="assets/img/features/f3.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f7.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f8.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f9.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f10.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f11.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f12.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f13.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/img/features/f14.jpg" alt="" />
        <div className="des">
          <span>Pertanian 1</span>
          <h5>Wortel</h5>
          <div className="star">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <h4>Rp.10.000</h4>
        </div>
        <a href="#">
          <i className="bi bi-cart2 cart" />
        </a>
      </div>
    </div>
  </section>
  <section id="sm-banner" className="section-p1">
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

        );
    }
}
export default Home;