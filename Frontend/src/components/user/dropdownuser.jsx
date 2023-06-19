
import user from '../assets/images/user.png';
import edit from '../assets/images/edit.png';
import logout from '../assets/images/log-out.png';
import './dropdownuser.css';
import { Link } from 'react-router-dom';

import React, {useState, useEffect, useRef} from 'react';

function App() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <label className='fa fa-user'></label> 
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Shopy<br/><span>desc</span></h3>
          <ul>
            <Link to="/Account">
            <DropdownItem img = {user} text = {"My Profile"}/>
            </Link>
            <Link to="/Register">
            <DropdownItem img = {edit} text = {"Signup"}/>
            </Link>
            <Link to="/">
            <DropdownItem img = {logout} text = {"Logout"}/>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;