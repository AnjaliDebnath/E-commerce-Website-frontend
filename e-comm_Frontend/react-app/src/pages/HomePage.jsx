import React from 'react';
import Navbar from '../components/Navbar';
import QuickLinks from '../components/QuickLinks';
import Footer from '../components/Footer';
import ContactLinks from '../components/ContactLinks';
import Carousel from '../components/Carousel';
import images from '../components/CarouselImages';



const HomePage = () => {


  return (


    <div style={{ minHeight: "100vh", paddingBottom: "60px" }}>
        <Navbar/>
        <QuickLinks/>
        <Carousel images={images} />
        <ContactLinks/>
        <Footer/>

      
    </div>
  );
}

export default HomePage;
