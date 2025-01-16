import React from "react";
import styles from './ProductCardStyles'

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
