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
import HorizontalScroller from '../components/HorizontalScroller';




const HomePage = () => {
  


  return (


    <div className='flex flex-col bg-gray-200' style={{ minHeight: "100vh", paddingBottom: "60px" }}>
      <CartProvider>
        <Navbar/>
        <QuickLinks/>
        <Carousel images={images} />
        <div className='mt-[-50vh] z-20'>
        <CardGrid1/>
        </div>
        <HorizontalScroller/>
        <ProductGrid/>
        <ContactLinks/>
        <Footer/>
      </CartProvider>

      
    </div>
  );
}

export default HomePage;
