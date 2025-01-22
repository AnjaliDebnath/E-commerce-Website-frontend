import React from "react";
import Slider from "react-slick";
import image1 from "../assets/carousel-images/c1.jpg";
import image2 from "../assets/carousel-images/c2.jpg";
import image3 from "../assets/carousel-images/c3.jpg";
import image4 from "../assets/carousel-images/c4.jpg";
// Ensure all required CSS files are imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true, // Enable dots for better navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Use 1 slide to work with fade effect
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Keep fade for a smooth transition
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Content */}
      <Slider {...settings}>
        <div className="relative w-full">
          <img
            src={image1}
            alt="Image 1"
            className="w-full object-contain" // Adjusts to fit full width and maintain aspect ratio
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
        <div className="relative w-full">
          <img
            src={image2}
            alt="Image 2"
            className="w-full object-contain" // Adjusts to fit full width and maintain aspect ratio
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
        <div className="relative w-full">
          <img
            src={image3}
            alt="Image 3"
            className="w-full object-contain" // Adjusts to fit full width and maintain aspect ratio
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
        <div className="relative w-full">
          <img
            src={image4}
            alt="Image 4"
            className="w-full object-contain" // Adjusts to fit full width and maintain aspect ratio
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
      </Slider>

      {/* Left and Right Navigation Buttons */}
      <button
        className="absolute top-1/4 left-4 transform -translate-y-1/2 text-white text-4xl z-10"
        onClick={() => document.querySelector(".slick-prev")?.click()}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/4 right-4 transform -translate-y-1/2 text-white text-4xl z-10"
        onClick={() => document.querySelector(".slick-next")?.click()}
      >
        &#8250;
      </button>
    </div>
  );
}
