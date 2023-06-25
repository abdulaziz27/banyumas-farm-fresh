import React, { useEffect } from 'react'
import Home from "../components/mainpage/Home"
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header';
import { Link } from 'react-router-dom'


const Pages = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        <h2 style={{ marginTop: "50px" }}>New Arivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
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
      <section id="sm-banner" className="section-p1" style={{ paddingTop: "100px" }}>
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
  )
}

export default Pages
