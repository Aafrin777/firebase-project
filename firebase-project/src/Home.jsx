
import React from 'react'
import Navbar from './Navbar'
import Header from './Header';
import Workapi from './Workapi';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return(
        <>
    <Navbar/>
    <Header />
    <Workapi />
    <About />
    <Services />
    <Contact />
    <Footer />
        </>
      )
    }
export default Home;
