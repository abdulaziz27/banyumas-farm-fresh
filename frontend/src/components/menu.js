import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <Fragment>
          <section id="header">
    <div>
      <Link to="/">
      <img src="assets/img/Bj.png" className="logo" alt="" />
      </Link>
    </div>
    <div>
      <ul id="navbar">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/shop">Shop</Link>
        </li>
        <li>
        <Link to="/blog">Blog</Link>
        </li>
        <li>
        <Link to="/about">about</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
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
        <div>
          <li id="account">
          <Link to="/account">
          <i className="bi bi-person" />
          </Link>
          </li>
        </div>
        <Link to="/account"></Link>
        <li id="bag">
        <Link to="/account"></Link>
        <Link to="/cart">
            <i className="bi bi-cart-fill" />
        </Link>
        </li>
        <Link to="/cart"></Link>
        <div>
        <a href="#" id="close">
          <i className="bi bi-x" />
        </a>
        </div>
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
      <Link to="/account">
        <i className="bi bi-person" />
        </Link>
        <Link to="/cart">
        <i className="bi bi-cart-fill" />
        </Link>
      <i id="bar" className="bi bi-three-dots" />
    </div>
  </section>
    </Fragment>
  )
}

export default Menu;