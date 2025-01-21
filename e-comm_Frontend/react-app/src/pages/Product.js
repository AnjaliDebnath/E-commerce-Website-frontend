import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Navbar from "../components/Navbar";
import QuickLinks from "../components/QuickLinks";
import { addItem } from "../slices/CartSlice"; // Adjust path based on your folder structure

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const dispatch = useDispatch(); // Initialize useDispatch

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem({
        _id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
        rating: product.rating,
    }));
    setSuccessMessage("Item added to cart successfully!");

    // Clear the message after 3 seconds
    setTimeout(() => {
        setSuccessMessage("");
    }, 3000);
};


  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "18px",
          color: "red",
        }}
      >
        {error}
      </div>
    );

  return (
    <div>
      <Navbar />
      <QuickLinks />
      <div style={{ padding: "20px" }}>
        {/* Display success message */}
        {successMessage && (
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "#d4edda",
              color: "#155724",
              border: "1px solid #c3e6cb",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            {successMessage}
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
                {product.title.length > 50
                  ? `${product.title.substring(0, 50)}...`
                  : product.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>

              <p style={{ fontSize: "14px", color: "#666" }}>
                Rating: {product.rating?.rate || "N/A"} (
                {product.rating?.count || 0} reviews)
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  margin: "10px 0",
                }}
              >
                ${product.price}
              </p>

              <button
                style={{
                  padding: "10px 20px",
                  width: "100%",
                  backgroundColor: "#ffa500",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
