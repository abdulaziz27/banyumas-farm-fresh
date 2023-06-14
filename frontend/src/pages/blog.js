import React, { Fragment } from 'react'
import Menu from '../components/menu'
function Blog() {
  return (
    <Fragment>
        <>
        <Menu/>

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

export default Blog