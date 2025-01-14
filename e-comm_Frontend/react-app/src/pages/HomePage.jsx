import React from 'react';
import Navbar from '../components/Navbar';
import QuickLinks from '../components/QuickLinks';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "60px" }}>
        <Navbar/>
        <QuickLinks/>
        <Footer/>

      
    </div>
  );
}

export default HomePage;
