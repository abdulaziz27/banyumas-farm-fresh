import React, { useEffect } from 'react'
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header';



const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <><Header />
      <Wrapper />
    </>
  )
}

export default Checkout
