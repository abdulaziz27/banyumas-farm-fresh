import React from "react"
import { Link } from "react-router-dom"
import Dropdownuser from "../../pages/"



const Head = () => {


  return (
    <>
      <section className='head'>
      
        <div className='container d_flex'>
          <div className='left row'>

            <label>🇮🇩</label>
            <label>🇺🇸</label>
            <strong>Selamat datang di shopy</strong>
            

          </div>
          <div className='right row RText'>
          
            <Link to="/blog">
            <label>Blog</label>
            </Link>
            <Link to="/bantuan">
            <label>Bantuan</label>
            </Link>
            
            

          </div>
          <Link to='/Cart'>
              <label className='fa fa-shopping-bag'></label>
            </Link>
          
          <Dropdownuser/>

                  

        </div>        
      </section>


    </>
  )
}

export default Head
