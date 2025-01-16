import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    carouselContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width:"100vw", // Full screen width
      height: "60vh", // Full screen height
      overflow: "hidden",
    },
    imageContainer: {
      display: "flex",
      // flexDirection: "flex-column",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentIndex * 100}%)`
    },
    image: {
      width: "100vw", // Full screen width
      height: "60vh", // Full screen height
      objectFit: "cover", // Ensure the image covers the entire area
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      zIndex: 2,
    },
    leftButton: {
      left: "10px",
    },
    rightButton: {
      right: "10px",
    },
    indicators: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    indicator: {
      width: "10px",
      height: "10px",
      margin: "0 5px",
      borderRadius: "50%",
      backgroundColor: "#ccc",
      cursor: "pointer",
    },
    activeIndicator: {
      backgroundColor: "#000",
    },
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={styles.carouselContainer}>
      {/* Left Button */}
      <button
        style={{ ...styles.button, ...styles.leftButton }}
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Image Container */}
      <div style={styles.imageContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={styles.image}
          />
        ))}
      </div>

      {/* Right Button */}
      <button
        style={{ ...styles.button, ...styles.rightButton }}
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div style={styles.indicators}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              ...(currentIndex === index ? styles.activeIndicator : {}),
            }}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
