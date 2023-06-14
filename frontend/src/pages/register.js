import React, { Fragment } from 'react'
import Menu from '../components/menu'
function Register() {
  return (
    <Fragment>
        <>
  <Menu/>
  <section className="main-container col1-layout">
    <div className="inside-col">
      <div className="breadcrumbs-sec">
        <div className="container">
          <div className="breadcrumbs">
            <ul>
              <li className="home">
                <a href="index.html" title="go to home page">
                  Home
                </a>
                <span>/</span>
              </li>
              <li>
                <strong>Daftar</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <article className="col-main">
              <div className="account-login">
                <fieldset className="col2-set">
                  <div className="registered-users">
                    <strong>Buat Akun</strong>
                    <div className="content">
                      <p>
                        Jika anda tidak memiliki akun dengan kami, silahkan buat
                        baru.
                      </p>
                      <ul className="form-list">
                        <li>
                          <label htmlFor="email">
                            Username
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            title="alamat email"
                            className="input-text required-entry"
                            id="email"
                            defaultValue=""
                            name="login[username]"
                          />
                        </li>
                        <li>
                          <label htmlFor="email">
                            Alamat Email
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            title="alamat email"
                            className="input-text required-entry"
                            id="email"
                            defaultValue=""
                            name="login[username]"
                          />
                        </li>
                        <li>
                          <label htmlFor="pass">
                            Password
                            <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            title="password"
                            className="input-text required-entry validate-password"
                            id="pass"
                            name="login[password]"
                          />
                        </li>
                      </ul>
                      <p className="required">* wajib diisi</p>
                      <div id="masuk">
                        <button className="normal">Daftar</button>
                      </div>
                      <div>
                        <br />
                        <br />
                        <p>
                          Sudah punya akun?{" "}
                          <a href="login.html">masuk disini</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </article>
          </div>
        </div>
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

export default Register