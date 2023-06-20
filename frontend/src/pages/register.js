import React, { Fragment, useState, useEffect } from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser, sendVerificationEmail } from '../services/authService'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [showAlert, setShowAlert] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email,
        password,
      };

      const response = await registerUser(user);
      console.log(response); // Tampilkan pesan sukses atau berikan umpan balik ke pengguna

      // Kirim email verifikasi
      await sendVerificationEmail(email);

      // Redirect ke halaman sukses registrasi atau halaman verifikasi email
      navigate('/');
    } catch (error) {
      console.error(error); // Tampilkan pesan error atau berikan umpan balik ke pengguna
    }
  };

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
                            Alamat Email
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            title="alamat email"
                            className="input-text required-entry"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </li>
                      </ul>
                      <p className="required">* wajib diisi</p>
                      <div id="masuk">
                        <button onClick={handleRegister} className="normal">Daftar</button>
                      </div>
                      <div>
                        <br />
                        <br />
                        <p>
                          Sudah punya akun?{" "}
                          <Link to="/login">masuk disini</Link>
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
    <Footer/>
</>
    </Fragment>
  )
}

export default Register