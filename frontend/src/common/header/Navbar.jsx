import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const handleCategoryClick = () => {
    // Add your logic to handle category click here
    closeMobileMenu();
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex categories-dropdown">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
            <div className="categories-dropdown-content">
              {/* Add your category links here */}
              <Link to="/category1" onClick={handleCategoryClick}>
                Fresh Vegetables
              </Link>
              <Link to="/category2" onClick={handleCategoryClick}>
                Fresh Fruits
              </Link>
              <Link to="/category3" onClick={handleCategoryClick}>
                Fresh Meats
              </Link>
            </div>
          </div>

          <div className="navlink">
            <ul
              className={`link f_flex capitalize ${
                mobileMenu ? 'nav-links-MobileMenu' : 'nav-links'
              }`}
              onClick={closeMobileMenu}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/Shop">shop</Link>
              </li>
              <li>
                <Link to="/Blog">blog</Link>
              </li>
              <li>
                <Link to="/Contact">contact</Link>
              </li>
              <li>
                <Link to="/About">about</Link>
              </li>
            </ul>

            <button className="toggle" onClick={toggleMobileMenu}>
              {mobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
