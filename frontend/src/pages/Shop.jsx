import React, { useEffect } from 'react'
import Home from "../components/mainpage/Home"
import Wrapper from "../components/wrapper/Wrapper"
import { Link } from 'react-router-dom'
import Header from '../common/header/Header';


const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <section id="banner" className="section-m1">
        <h4>Fresh Vegetables & Fruits at your doorstep</h4>
        <h2>
          We deliver fresh <span>vegetables & fruits</span> at your doorstep
        </h2>
        <Link to="/Shop">
          <button className="normal">Explore More</button>
        </Link>
      </section>
      <Home />
      <section id="page-header">
        <h2>LEE JI EUN</h2>
        <p>IU LOVE</p>
      </section>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          <div className="pro">
            <Link to="/Sproduct">
              <img src="assets/img/features/f7.jpg" alt="" />
            </Link>
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
  )
}

export default Shop
