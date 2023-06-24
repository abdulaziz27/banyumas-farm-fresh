import React, { useEffect } from 'react'
import Wrapper from "../components/wrapper/Wrapper"
import { Link } from 'react-router-dom'
import Header from '../common/header/Header';


const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

    <><Header />

      <Wrapper />
    </>
  )
}

export default Account
