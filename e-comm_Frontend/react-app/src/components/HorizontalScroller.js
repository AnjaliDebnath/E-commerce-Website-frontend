import React from "react";

const HorizontalScroller = () => {
  const products = [
    {
      id: 1,
      imgSrc: "https://m.media-amazon.com/images/I/61Kc-w-ePUL._AC_SY400_.jpg",
      alt: "Product 1",
    },
    {
      id: 2,
      imgSrc: "https://m.media-amazon.com/images/I/51FSD2qts-L._AC_SY400_.jpg",
      alt: "Product 2",
    },
    {
      id: 3,
      imgSrc: "https://m.media-amazon.com/images/I/71QfC+NELFL._AC_SY400_.jpg",
      alt: "Product 3",
    },
    {
      id: 4,
      imgSrc: "https://m.media-amazon.com/images/I/515nNlnjmSL._AC_SY400_.jpg",
      alt: "Product 4",
    },
    {
      id: 5,
      imgSrc: "https://m.media-amazon.com/images/I/61Kc-w-ePUL._AC_SY400_.jpg",
      alt: "Product 1",
    },
    {
      id: 6,
      imgSrc: "https://m.media-amazon.com/images/I/51FSD2qts-L._AC_SY400_.jpg",
      alt: "Product 2",
    },
    {
      id: 7,
      imgSrc: "https://m.media-amazon.com/images/I/71QfC+NELFL._AC_SY400_.jpg",
      alt: "Product 3",
    },
    {
      id: 8,
      imgSrc: "https://m.media-amazon.com/images/I/515nNlnjmSL._AC_SY400_.jpg",
      alt: "Product 4",
    },
    {
      id: 9,
      imgSrc: "https://m.media-amazon.com/images/I/61Kc-w-ePUL._AC_SY400_.jpg",
      alt: "Product 1",
    },
    {
      id: 10,
      imgSrc: "https://m.media-amazon.com/images/I/51FSD2qts-L._AC_SY400_.jpg",
      alt: "Product 2",
    },
    {
      id: 11,
      imgSrc: "https://m.media-amazon.com/images/I/71QfC+NELFL._AC_SY400_.jpg",
      alt: "Product 3",
    },
    {
      id: 12,
      imgSrc: "https://m.media-amazon.com/images/I/515nNlnjmSL._AC_SY400_.jpg",
      alt: "Product 4",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 bg-white">
      <div className="text-xl font-bold  mb-4">
        Minimum 50% off | Home, kitchen & outdoors
      </div>
      <div className="scroller-container flex overflow-x-auto gap-4 py-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="scroller-item flex-none w-48 bg-white text-center"
          >
            <img
              className="w-full h-64 rounded-t-lg"
              src={product.imgSrc}
              alt={product.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;