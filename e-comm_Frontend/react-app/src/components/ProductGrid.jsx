import React from "react";
import ProductCard from "./ProductCard";
import g1 from '../assets/products/g1.jpg'
import g2 from '../assets/products/g2.jpg'
import g3 from '../assets/products/g3.jpg'
import g4 from '../assets/products/g4.jpg'

const ProductGrid = () => {
  const products = [
    {
      imageSrc: g1, // Replace with the actual image URL for the geyser
      title: "Havells",
      description:
        "Otto 25 Litre Storage Water Heater(Geyser)| Temp. Sensing LED Indicator| Anti Rust Tank | With Sh...",
      rating: 4,
      price: "₹13,299.00",
      originalPrice: "₹21,590.00",
      dealTag: "-38%",
      deliveryDate: "Sunday, January 19",
    },
    {
      imageSrc: g2, // Replace with the actual image URL for the geyser
      title: "Bajaj",
      description:
        "Bajaj 15 Litre Storage Water Heater| Glasslined Tank | Titanium Armoured Technology...",
      rating: 4.5,
      price: "₹11,499.00",
      originalPrice: "₹16,590.00",
      dealTag: "-31%",
      deliveryDate: "Sunday, January 19",
    },
    {
      imageSrc: g3, // Replace with the actual image URL for the geyser
      title: "AO Smith",
      description:
        "AO Smith 20 Litre Vertical Water Heater | Smart Digital Control | Superior Quality...",
      rating: 5,
      price: "₹15,499.00",
      originalPrice: "₹23,590.00",
      dealTag: "-34%",
      deliveryDate: "Monday, January 20",
    },
    {
      imageSrc:g4, // Replace with the actual image URL for the geyser
      title: "V-Guard",
      description:
        "V-Guard 25 Litre Storage Water Heater | Advanced Safety Features | LED Display...",
      rating: 4,
      price: "₹14,999.00",
      originalPrice: "₹19,500.00",
      dealTag: "-23%",
      deliveryDate: "Sunday, January 19",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
