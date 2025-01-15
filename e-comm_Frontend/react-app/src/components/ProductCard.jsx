import React from "react";

const ProductCard = ({
  imageSrc,
  title,
  description,
  rating,
  price,
  originalPrice,
  dealTag,
  deliveryDate,
}) => {
  const styles = {
    card: {
      maxWidth: "300px",
      backgroundColor: "#ffffff",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginLeft:"25px"
    },
    image: {
      width: "220px",
      height: "270px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "12px",
    },
    title: {
      fontWeight: "600",
      fontSize: "16px",
      color: "#1f2937",
      marginTop: "12px",
    },
    description: {
      fontSize: "14px",
      color: "#4b5563",
      marginTop: "8px",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "8px",
    },
    stars: {
      display: "flex",
    },
    rating: {
      fontSize: "14px",
      color: "#6b7280",
      marginLeft: "8px",
    },
    dealTag: {
      display: "inline-block",
      backgroundColor: "#ef4444",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "600",
      padding: "4px 8px",
      borderRadius: "4px",
      marginTop: "8px",
    },
    priceContainer: {
      marginTop: "12px",
    },
    price: {
      color: "#dc2626",
      fontSize: "18px",
      fontWeight: "700",
    },
    originalPrice: {
      fontSize: "14px",
      color: "#6b7280",
      textDecoration: "line-through",
      marginLeft: "8px",
    },
    deliveryInfo: {
      fontSize: "14px",
      color: "#4b5563",
      marginTop: "8px",
    },
    button: {
      marginTop: "12px",
      width: "100%",
      backgroundColor: "#fbbf24",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "600",
      padding: "10px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#f59e0b",
    },
  };

  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={title} style={styles.image} />
      <h5 style={styles.title}>{title}</h5>
      <p style={styles.description}>{description}</p>

      <div style={styles.ratingContainer}>
        <div style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < rating ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={index < rating ? 0 : 1}
              style={{ width: "16px", height: "16px", color: "#f59e0b" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27l5.18 2.73-1.64-6.29L20 9.24l-6.36-.54L12 3 9.36 8.7 3 9.24l4.46 4.47-1.64 6.29z"
              />
            </svg>
          ))}
        </div>
        <span style={styles.rating}>{rating}</span>
      </div>

      <span style={styles.dealTag}>{dealTag}</span>

      <div style={styles.priceContainer}>
        <span style={styles.price}>{price}</span>
        {originalPrice && <span style={styles.originalPrice}>{originalPrice}</span>}
      </div>

      <p style={styles.deliveryInfo}>
        Get it by <strong>{deliveryDate}</strong>
      </p>
      <p style={styles.deliveryInfo}>FREE Delivery by Amazon</p>

      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
