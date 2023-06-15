import React, { Fragment } from 'react'
import Menu from '../components/menu';
import Footer from '../components/footer';
import Newslatter from '../components/newslatter';

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
    <Newslatter/>
    <Footer/>

    </Fragment>
  )
}

export default About;