import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './dropdownuser.css';

import user from '../../components/assets/images/edit.png';
import edit from '../../components/assets/images/edit.png';
import logout from '../../components/assets/images/log-out.png';

function App() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={() => setOpen(!open)}>
          <label className="fa fa-user"></label>
        </div>

        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <h3>
            Shopy<br />
            <span>desc</span>
          </h3>
          <ul>
            <Link to="/user/accountsettings"> {/* Update the 'to' attribute */}
              <DropdownItem img={user} text={"My Profile"} />
            </Link>

            <Link to="/Register">
              <DropdownItem href="/Register" img={edit} text={"Signup"} />
            </Link>

            <Link to="#">
              <DropdownItem href="#" img={logout} text={"Logout"} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt="icon"></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;
