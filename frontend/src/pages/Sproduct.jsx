import React from "react"
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header';
import { Link } from 'react-router-dom'



const Sproduct = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var MainImg = document.getElementById("MainImg");
    var smallimg = document.getElementsByClassName("small-img");
if (smallimg.length > 0) {
  smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
  }
  smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
  }
  smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
  }
  smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
  }
}
  });

  return (
    <><Header />
  <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
      <img src="assets/img/features/f7.jpg" width="100%" id="MainImg" alt="" />
      <div className="small-img-group">
        <div className="small-img-col">
          <img
            src="assets/img/features/f9.jpg"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
        <div className="small-img-col">
          <img
            src="assets/img/features/f10.jpg"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
        <div className="small-img-col">
          <img
            src="assets/img/features/f11.jpg"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
        <div className="small-img-col">
          <img
            src="assets/img/features/f12.jpg"
            width="100%"
            className="small-img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="single-pro-details">
      <h6>Shop / Sproduct</h6>
      <h4>i love u</h4>
      <h2>Rp.1</h2>
      <select>
        <option>Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type="number" defaultValue={1} />
      <Link to="/Cart">
      <button className="normal">add to cart</button>
      </Link>
      <h4>product details</h4>
      <span>
        Lee Ji-eun (bahasa Korea: 이지은; Hanja: 李知恩; lahir 16 Mei 1993) atau
        yang biasa dikenal dengan IU (bahasa Korea: 아이유) adalah seorang
        penyanyi-penulis lagu, produser, model dan aktris berasal dari Korea.
        Nama panggungnya berasal dari kata "I and You (Aku dan Kamu)" yang
        melambangkan bahwa "kita" dapat menjadi "satu" melalui musik.[1] Nama
        klub penggemarnya yaitu UAENA, di mana setiap suku kata memiliki arti
        yang berbeda: "you (kamu)" dari Bahasa Inggris, "ae" adalah Sino-Korea
        untuk "cinta", dan "na" adalah Bahasa Korea untuk "aku". IU melakukan
        debut di usia 15 tahun pada 2008, di bawah naungan LOEN Entertainment
        (sekarang Kakao M) sebagai penyanyi dengan album mini pertamanya Lost
        and Found. Meskipun album selanjutnya, Growing Up (album IU) dan IU...IM
        membawa kesuksesan, namun perilisan lagu "Good Day" (bahasa Korea: 좋은
        날), yang merupakan single utama dari album 2010-nya, Real adalah
        kesuksesan besar dari penyanyi tersebut yang membuatnya mendapatkan
        ketenaran nasional di korea selatan. "Good Day" menghabiskan waktu lima
        minggu berturut-turut berada di posisi teratas Tangga Lagu Digital Gaon
        Korea Selatan, dan pada tahun 2019, lagu ini menduduki peringkat nomor
        satu dalam daftar "100 Lagu K-Pop Terbaik dekade 2010an" oleh majalah
        Billboard.
      </span>
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>iu lainnya</h2>
    <p>cantik banget anjim</p>
    <div className="pro-container">
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
    </div>
  </section>


      <Wrapper />
    </>
  )
}

export default Sproduct
