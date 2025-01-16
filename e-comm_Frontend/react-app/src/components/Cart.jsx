import React, { useState } from "react";
import Navbar from './Navbar';
import QuickLinks from "./QuickLinks";
import CartItem from "./CartItem";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sonata Poze Quartz Analog Grey Dial Stainless Steel Strap Watch for Men - SP70020QM03W",
      price: 924.0,
      imageSrc: "https://m.media-amazon.com/images/I/61Prn5U93PL._AC_AA180_.jpg",
      stockStatus: "In stock",
      seller: "Titan Company LTD",
      delivery: "Amazon Delivered",
      giftOptions: "Gift options not available",
      quantity: 1, // Added quantity for each product
    },
    {
        id: 2,
        name: "Fastrack Reflex Play Smartwatch with AMOLED Display, Built-in Alexa, SpO2 & Heart Rate Monitoring",
        price: 3795.0,
        imageSrc: "https://m.media-amazon.com/images/I/71Kx6rgmlRS._AC_AA220_.jpg",
        stockStatus: "In stock",
        seller: "Fastrack India",
        delivery: "Amazon Delivered",
        giftOptions: "Gift options available",
        quantity: 1, // Added quantity for the product
      },
      
  ]);

  const incrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const calculateSubtotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div>
      <Navbar />
      <QuickLinks />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Product Column */}
            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
              <div className="border-b border-gray-300 pb-2 mb-4">
                <button className="text-blue-500 text-sm">Deselect all items</button>
              </div>
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                />
              ))}
            </div>

            {/* Order Summary Column */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">
                Subtotal ({products.reduce((total, product) => total + product.quantity, 0)} items):
              </h2>
              <p className="text-xl font-bold mb-4">₹{calculateSubtotal().toFixed(2)}</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-md">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
