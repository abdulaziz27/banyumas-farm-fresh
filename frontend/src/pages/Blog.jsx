import React, { useEffect } from 'react'
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header';


const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Header />
    <section id="page-header" className="blog-header">
    <h2>#READMORE</h2>
    <p>READ ALL</p>
  </section>
  <section id="blog">
    <div className="blog-box">
      <div className="blog-img">
        <img src="assets/img/blog/f1.jpg" alt="" />
      </div>
      <div className="blog-detail">
        <h4>dasdemfakf</h4>
        <p>
          Lee Ji-eun (bahasa Korea: 이지은; Hanja: 李知恩; lahir 16 Mei 1993)
          atau yang biasa dikenal dengan IU (bahasa Korea: 아이유) adalah
          seorang penyanyi-penulis lagu, produser, model dan aktris berasal dari
          Korea.{" "}
        </p>
        <a href="#">continue reading</a>
      </div>
      <h1>10/09</h1>
    </div>
    <div className="blog-box">
      <div className="blog-img">
        <img src="assets/img/blog/f2.jpg" alt="" />
      </div>
      <div className="blog-detail">
        <h4>dasdemfakf</h4>
        <p>
          IU telah merilis total lima Album studio dan sembilan Extended play
          dalam karirnya, mencetak lima album berperingkat satu dan 29 single
          nomor satu di Gaon Music Chart &amp; 17 di Billboard K-Pop Hot 100,
          menjadika nnya sebagai musisi yang memiliki single nomor satu
          terbanyak di Korea. Sebagai salah satu artis solo terlaris di industri{" "}
        </p>
        <a href="#">continue reading</a>
      </div>
      <h1>09/01</h1>
    </div>
    <div className="blog-box">
      <div className="blog-img">
        <img src="assets/img/blog/f3.jpg" alt="" />
      </div>
      <div className="blog-detail">
        <h4>dasdemfakf</h4>
        <p>
          IU telah merilis total lima Album studio dan sembilan Extended play
          dalam karirnya, mencetak lima album berperingkat satu dan 29 single
          nomor satu di Gaon Music Chart &amp; 17 di Billboard K-Pop Hot 100,
          menjadika nnya sebagai musisi yang memiliki single nomor satu
          terbanyak di Korea. Sebagai salah satu artis solo terlaris di industri{" "}
        </p>
        <a href="#">continue reading</a>
      </div>
      <h1>1/01</h1>
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

export default Blog
