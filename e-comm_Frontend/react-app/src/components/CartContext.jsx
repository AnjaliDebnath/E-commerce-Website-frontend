import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Provide Context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook for easy access to the context
export const useCart = () => useContext(CartContext);
