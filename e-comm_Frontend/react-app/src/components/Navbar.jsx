import React from "react";
import amazonLogo from "../assets/images/amazon-logo.jpg";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from "./NavbarStyles";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      {/* Left Section */}
      <div style={styles.leftContainer}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src={amazonLogo} alt="Amazon" style={styles.logo} />
        </div>

        {/* Delivery Location */}
        <div style={styles.locationContainer}>
          <FaMapMarkerAlt style={styles.icon} />
          <div>
            <span style={styles.deliveryText}>Deliver to Anjali</span><br/>
            <span style={styles.locationText}>Moradabad 244001</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.middleContainer}>
        {/* Dropdown */}
        <div style={styles.dropdownContainer}>
          <select style={styles.dropdown}>
            <option value="all" >All</option>
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
        <div style={styles.language}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
            alt="Language"
            style={styles.flag}
          />
          <span style={styles.dropdownArrow}>▼</span>
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
        <div style={styles.cart}>
          <FaShoppingCart style={styles.cartIcon} />
          <span style={styles.cartCount}>1</span>
          <span style={styles.link}>Cart</span>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
