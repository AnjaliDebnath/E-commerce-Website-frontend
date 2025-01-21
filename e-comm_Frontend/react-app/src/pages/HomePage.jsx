import React from 'react';

import Navbar from '../components/Navbar';
import QuickLinks from '../components/QuickLinks';
import Footer from '../components/Footer';
import ContactLinks from '../components/ContactLinks';
import Carousel from '../components/Carousel';
import images from '../components/CarouselImages';
import CardGrid1 from '../components/CardGrid1';
import ProductGrid from '../components/ProductGrid';
import { CartProvider } from '../components/CartContext';




const HomePage = () => {
  


  return (


    <div style={{ minHeight: "100vh", paddingBottom: "60px" }}>
      <CartProvider>
        <Navbar/>
        <QuickLinks/>
        <Carousel images={images} />
        <CardGrid1/>
        <ProductGrid/>
        <ContactLinks/>
        <Footer/>
      </CartProvider>

      
    </div>
  );
}

export default HomePage;
