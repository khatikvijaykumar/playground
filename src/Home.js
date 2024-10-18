import React from 'react'
import Header from './HF/Header'
import { Outlet } from 'react-router-dom'
import Footer from './HF/Footer'


const Home = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
   
    </>
  )
}

export default Home
