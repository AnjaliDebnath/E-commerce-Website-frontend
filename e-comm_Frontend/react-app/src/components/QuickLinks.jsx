import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Links from "./Links";

const QuickLinks = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#232f3e",
      color: "#ffffff",
      padding: "10px 20px",
      justifyContent: "space-between",
    },
    left: {
      display: "flex",
      alignItems: "center",
    },
    allButton: {
      marginRight: "15px",
      padding: "5px 10px",
      backgroundColor: "#37475a",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      borderRadius: "3px",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: "10px", // Add spacing between the two sections
    },
    saleSection: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#37475a", // Dark navy background
      color: "#ffffff",
      padding: "5px 10px",
      borderRadius: "5px",
      fontWeight: "bold",
      fontSize: "14px",
      cursor: "pointer",
    },
    saleIcon: {
      marginRight: "8px",
    },
    shopNowSection: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ff9900", // Orange background for "Shop Now"
      color: "#232f3e", // Text color contrasting the orange background
      padding: "5px 10px",
      borderRadius: "5px",
      fontWeight: "bold",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  return (
    <div>
      {/* Quick Links Bar */}
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.left}>
          <button
            style={styles.allButton}
            onClick={() => setIsSidebarOpen(true)} // Open Sidebar
          >
            All
          </button>
        </div>

        {/* Center Links Section */}
        <Links />

        {/* Right Section: Great Republic Sale and Shop Now */}
        {/* <div style={styles.right}>
          {/* Great Republic Sale Section */}
          {/* <div style={styles.saleSection}>
            <img
              src="https://via.placeholder.com/20" // Replace with the orange decorative icon
              alt="Sale Icon"
              style={styles.saleIcon}
            />
            <span>Great Republic Sale</span>
          </div> */}

          {/* Shop Now Section */}
          {/* <div style={styles.shopNowSection}>
            <span>Shop Now</span> */}
          {/* </div> */}
        {/* </div> */} 
      </div>

      {/* Sidebar Component */}
      {isSidebarOpen && (
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
};

export default QuickLinks;
