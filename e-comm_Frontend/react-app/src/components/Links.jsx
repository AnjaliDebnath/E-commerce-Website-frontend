import React, { useState } from "react";

const Links = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    "Fresh",
    "Gift Ideas",
    "MX Player",
    "Lists",
    "Sell",
    "Buy Again",
    "Amazon Basics",
    "Gift Cards",
    "Today's Deals",
    "Health, Household & Personal Care",
  ];

  return (
    <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            transition: "background-color 0.3s",
            backgroundColor: hoveredIndex === index ? "#37475a" : "transparent",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default Links;
