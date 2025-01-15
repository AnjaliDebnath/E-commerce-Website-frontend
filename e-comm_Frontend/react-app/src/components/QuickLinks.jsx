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
      </div>

      {/* Sidebar Component */}
      {isSidebarOpen && (
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
};

export default QuickLinks;
