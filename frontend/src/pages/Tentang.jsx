import React, { useEffect } from 'react'
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header';


const About = () => {
   
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <><Header />
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
      <Wrapper />
    </>
  )
}

export default About
