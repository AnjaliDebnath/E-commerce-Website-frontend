import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#131a22",
      color: "#ffffff",
      padding: "20px",
      fontSize: "14px",
      position: "relative", // Change from "bottom" to "relative"
      bottom: 0,
      left: 0,
      right: 0,
      height:"200px"
    },
    linksContainer: {
      backgroundColor: "#131a22",
      color: "#ffffff",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 columns layout
      gap: "20px",
      justifyContent: "center",
      alignItems: "start",
      textAlign: "left",
      left: 0,
      right: 0,
      height:"200px"
    },
    linkGroup: {
      backgroundColor: "#131a22",
      color: "#ffffff",
      lineHeight: "1.8",
      left: 0,
      right: 0,
    },
    linkTitle: {
      backgroundColor: "#131a22",
      color: "#ffffff",
      fontWeight: "bold",
      left: 0,
      right: 0,
    },
    copyright: {
      backgroundColor: "#131a22",
      textAlign: "center",
      fontSize: "12px",
      color: "#ffffff",
      left: 0,
      right: 0,
      // marginTop: "10px",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Grid container for links */}
      <div style={styles.linksContainer}>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>AbeBooks</div>
          <div>Books, art & collectibles</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>Amazon Web Services</div>
          <div>Scalable Cloud Computing Services</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>Audible</div>
          <div>Download Audio Books</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>IMDb</div>
          <div>Movies, TV & Celebrities</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>Shopbop</div>
          <div>Designer Fashion Brands</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>Amazon Business</div>
          <div>Everything For Your Business</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>Prime Now</div>
          <div>2-Hour Delivery on Everyday Items</div>
        </div>
        <div style={styles.linkGroup}>
          <div style={styles.linkTitle}>Amazon Prime Music</div>
          <div>
            100 million songs, ad-free <br />
            Over 15 million podcast episodes
          </div>
        </div>
      </div>

      {/* Footer text */}
      <div style={styles.copyright}>
        Conditions of Use & Sale | Privacy Notice | Interest-Based Ads
        <br />
        © 1996-2025, Amazon.com, Inc. or its affiliates
      </div>
    </footer>
  );
};

export default Footer;
