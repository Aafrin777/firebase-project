//cuz this file is inside pages we have to add extra .
import React from 'react'
   import Navbar from '../Navbar';
   import Services from '../Services';
   import Footer from '../Footer';
const Service = () => {
  return (
    <>
    <Navbar/>
    <Services />
    <Footer />

</>
)
}

export default Service
//we gonna import main services.jsx file here not from pages>
