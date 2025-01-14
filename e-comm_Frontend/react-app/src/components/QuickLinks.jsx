import React from "react";
// import Sidebar from "./Sidebar"; 
import Links from "./Links"; 
const QuickLinks = () => {
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
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.left}>
        {/* Sidebar Placeholder */}
        {/* <Sidebar /> */}
        <button style={styles.allButton}>All</button>
      </div>

      {/* Center Links Section */}
      <Links />
    </div>
  );
};

export default QuickLinks;
