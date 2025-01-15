import React from "react";
import Card from "./Card";

import img5 from "../assets/cardProducts/brand_deals/img1.jpg";
import img6 from "../assets/cardProducts/brand_deals/img2.jpg";
import img7 from "../assets/cardProducts/brand_deals/img3.jpg";
import img8 from "../assets/cardProducts/brand_deals/img4.jpg";

import img1 from "../assets/cardProducts/keep_shopping/p1.jpg";
import img2 from "../assets/cardProducts/keep_shopping/p2.jpg";
import img3 from "../assets/cardProducts/keep_shopping/p3.jpg";
import img4 from "../assets/cardProducts/keep_shopping/p4.jpg";

import img9 from "../assets/cardProducts/shopping_trends/img1.jpg";
import img10 from "../assets/cardProducts/shopping_trends/img2.jpg";
import img11 from "../assets/cardProducts/shopping_trends/img3.jpg";
import img12 from "../assets/cardProducts/shopping_trends/img4.jpg";

import img13 from "../assets/cardProducts/discounts/img1.jpg";
import img14 from "../assets/cardProducts/discounts/img2.jpg";
import img15 from "../assets/cardProducts/discounts/img3.jpg";
import img16 from "../assets/cardProducts/discounts/img4.jpg";

import img17 from "../assets/cardProducts/daily_needs/img1.jpg";
import img18 from "../assets/cardProducts/daily_needs/img2.jpg";
import img19 from "../assets/cardProducts/daily_needs/img3.jpg";
import img20 from "../assets/cardProducts/daily_needs/img4.jpg";



const CardGrid1 = () => {
  const firstCardsData = [
    {
      category: "Keep Shopping For",
      images: [
        { src: img1, alt: "Laptop", description: "7 viewed" },
        { src: img2, alt: "Smartphone", description: "3 viewed" },
        { src: img3, alt: "Smartwatch", description: "1 viewed" },
        { src: img4, alt: "Running Shoes", description: "2 viewed" },
      ],
    },
    {
      category: "Brand Deals",
      images: [
        { src: img5, alt: "iPhone", description: "21% off - Republic Day Sale" },
        { src: img6, alt: "iQOO Z7", description: "29% off - Republic Day Sale" },
        { src: img7, alt: "iQOO Z8", description: "26% off - Republic Day Sale" },
        { src: img8, alt: "iQOO Z9", description: "29% off - Republic Day Sale" },
      ],
    },
    {
      category: "Shopping Trends",
      images: [
        { src: img9, alt: "Kitchen Essentials", description: "50% off" },
        { src: img10, alt: "Home Decor", description: "Stylish items" },
        { src: img11, alt: "Furniture", description: "Ergonomic Designs" },
        { src: img12, alt: "Smart Locks", description: "Smart Home" },
      ],
    },
    {
      category: "Top Discounts",
      images: [
        { src: img13, alt: "Apple Watch", description: "Exciting Offers" },
        { src: img14, alt: "Pigeon", description: "Stainless Steel Base" },
        { src: img15, alt: "Chairs", description: "Comfortable Office Chairs" },
        { src: img16, alt: "Decor", description: "Modern Living" },
      ],
    },
  ];

  const secondCardsData = [
    {
      category: "Daily Needs",
      images: [
        { src: img17, alt: "Product 1", description: "Popular Choice" },
        { src: img18, alt: "Product 2", description: "Top Rated" },
        { src: img19, alt: "Product 3", description: "Best Deal" },
        { src: img20, alt: "Product 4", description: "Limited Stock" },
      ],
    },
    {
      category: "Latest Trends",
      images: [
        { src: img1, alt: "Trend 1", description: "Hot Pick" },
        { src: img2, alt: "Trend 2", description: "Trending Now" },
        { src: img3, alt: "Trend 3", description: "Must-Have" },
        { src: img4, alt: "Trend 4", description: "New Arrival" },
      ],
    },
    {
      category: "Special Offers",
      images: [
        { src: img9, alt: "Offer 1", description: "50% Off" },
        { src: img10, alt: "Offer 2", description: "Free Shipping" },
        { src: img11, alt: "Offer 3", description: "Buy 1 Get 1" },
        { src: img12, alt: "Offer 4", description: "Best Value" },
      ],
    },
    {
      category: "Best Sellers",
      images: [
        { src: img13, alt: "Seller 1", description: "Highly Rated" },
        { src: img14, alt: "Seller 2", description: "Customer Favorite" },
        { src: img15, alt: "Seller 3", description: "Top Seller" },
        { src: img16, alt: "Seller 4", description: "Recommended" },
      ],
    },
  ];

  return (
    <div className="space-y-8 p-8">
      {/* First Row of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {firstCardsData.map((card, index) => (
          <Card key={index} category={card.category} images={card.images} />
        ))}
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {secondCardsData.map((card, index) => (
          <Card key={index} category={card.category} images={card.images} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid1;
