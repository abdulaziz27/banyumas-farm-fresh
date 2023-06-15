import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


function Newslatter() {
  return (
    <Fragment>
            <section id="newslatter" className="section-p1 section-m1">
    <div className="newstext">
      <h4>Sign Up</h4>
      <p>
        get email for <span>special offers</span>
      </p>
    </div>
    <div className="form">
      <input type="text" placeholder="your email address" />
     
      <button className="normal">signup</button>
   
    </div>
  </section>
    </Fragment>
  )
}

export default Newslatter;