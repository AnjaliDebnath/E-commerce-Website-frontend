import React, { useEffect, useState } from "react";
import amazonLogo from "../assets/images/amazon-logo.jpg";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from "./NavbarStyles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [user, setuser] = useState("");
  useEffect(() => {
    const username = localStorage.getItem("username");
    setuser(username || "Guest");
  }, []);

  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isDropdown, setIsDropdown] = useState(false)
  const languages = [
    { name: "English", code: "EN" },
    { name: "हिंदी", code: "HI" },
    { name: "தமிழ்", code: "TA" },
    { name: "తెలుగు", code: "TE" },
    { name: "ಕನ್ನಡ", code: "KN" },
    { name: "മലയാളം", code: "ML" },
    { name: "বাংলা", code: "BN" },
    { name: "मराठी", code: "MR" },
  ];

  return (
    <div style={styles.navbar}>
      {/* Left Section */}
      <div style={styles.leftContainer}>
        {/* Logo */}
        <Link to="/">
          <div style={styles.logoContainer}>
            <img src={amazonLogo} alt="Amazon" style={styles.logo} />
          </div>
        </Link>

        {/* Delivery Location */}
        <div style={styles.locationContainer}>
          <FaMapMarkerAlt style={styles.icon} />
          <div>
            <span style={styles.deliveryText}>Deliver to {user}</span>
            <br />
            <span style={styles.locationText}>Moradabad 244001</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.middleContainer}>
        {/* Dropdown */}
        <div style={styles.dropdownContainer}>
          <select style={styles.dropdown}>
            <option value="all">All</option>
            <option value="alexa">Alexa Skills</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Amazon.in"
          style={styles.input}
        />

        {/* Search Button */}
        <button style={styles.searchButton}>
          <FaSearch style={styles.searchIcon} />
        </button>
      </div>

      {/* Right Section */}
      <div style={styles.rightContainer}>
        {/* Language Selector */}
        <div
          style={styles.language}
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <img
            src="data:image/png;base64,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"
            alt="Language"
            style={styles.flag}
          />
          <span>EN</span>
          <span style={styles.dropdownArrow}>▼</span>
          <div
            style={{
              ...styles.langDropdown,
              ...(isDropdownVisible ? styles.dropdownVisible : {}),
            }}
          >
            {languages.map((lang, index) => (
              <div key={index} style={styles.option}>
                <input
                  type="radio"
                  name="language"
                  style={styles.radioButton}
                />
                <span>{`${lang.name} - ${lang.code}`}</span>
              </div>
            ))}
            <div>
              <span> Learn More</span>
            </div>

            <div>
              <span>
                {/* <img
                  src="data:image/png;base64,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"
                  alt="Language"
                  style={styles.flag}
                /> */}
                You are Shopping on Amazon.in
              </span>
            </div>
            <div>
              Change country/ origin
            </div>
          </div>
        </div>

        {/* User Account */}
        <div style={styles.account}>
          <span style={styles.greeting}>Hello, Anjali</span>
          <span style={styles.link}>Account & Lists</span>
          </div>

        {/* Returns & Orders */}
        <div style={styles.returns}>
          <span style={styles.smallText}>Returns</span>
          <span style={styles.link}>& Orders</span>
        </div>

        {/* Cart */}
        <Link to="/cart" style={styles.cart}>
          {" "}
          {/* Add Link to redirect to /cart */}
          <FaShoppingCart style={styles.cartIcon} />
          {totalQuantity > 0 && (
            <span style={styles.cartCount}>{totalQuantity}</span>
          )}
          <span style={styles.link}>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;