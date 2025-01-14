import React from "react";

const ContactLinks = () => {
  const styles = {
    container: {
        backgroundColor: "#131a22",
        color: "#ffffff",
        padding: "20px 40px",
        fontSize: "14px",
      },
      linksGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Four columns for the sections
        gap: "20px",
        marginBottom: "20px",
      },
      section: {
        lineHeight: "1.8",
      },
      sectionTitle: {
        fontWeight: "bold",
        marginBottom: "10px",
      },
      bottomBar: {
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        gap: "20px", // Add space between the logo and the language/flag selector
        borderTop: "1px solid #3a4553",
        paddingTop: "10px",
        marginTop: "10px",
      },
      logo: {
        fontSize: "18px",
        fontWeight: "bold",
      },
      languageSelector: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      flag: {
        width: "20px",
        height: "14px",
        borderRadius: "2px",
      },
  };

  return (
    <div style={styles.container}>
      {/* Top Grid */}
      <div style={styles.linksGrid}>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Get to Know Us</div>
          <div>About Amazon</div>
          <div>Careers</div>
          <div>Press Releases</div>
          <div>Amazon Science</div>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Connect with Us</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Make Money with Us</div>
          <div>Sell on Amazon</div>
          <div>Sell under Amazon Accelerator</div>
          <div>Protect and Build Your Brand</div>
          <div>Amazon Global Selling</div>
          <div>Supply to Amazon</div>
          <div>Become an Affiliate</div>
          <div>Fulfilment by Amazon</div>
          <div>Advertise Your Products</div>
          <div>Amazon Pay on Merchants</div>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Let Us Help You</div>
          <div>Your Account</div>
          <div>Returns Centre</div>
          <div>Recalls and Product Safety Alerts</div>
          <div>100% Purchase Protection</div>
          <div>Amazon App Download</div>
          <div>Help</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
    {/* Center-aligned Amazon logo */}
    <div style={styles.logo}>amazon</div>

    {/* Center-aligned Language and Flag Selector */}
    <div style={styles.languageSelector}>
      <select
        style={{
          backgroundColor: "#232f3e",
          color: "#fff",
          border: "none",
          padding: "5px",
        }}
      >
        <option>English</option>
        <option>Español</option>
      </select>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
        alt="India Flag"
        style={styles.flag}
      />
    </div>
      </div>
    </div>
  );
};

export default ContactLinks;
