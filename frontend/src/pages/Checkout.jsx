import React, { useEffect } from 'react'
import Wrapper from "../components/wrapper/Wrapper"
import Header from '../common/header/Header'
import Detail from '../components/Order/DetailCheckout'




const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Header />
    <Detail />
    <Wrapper />
    </>
  )
}

export default Checkout
