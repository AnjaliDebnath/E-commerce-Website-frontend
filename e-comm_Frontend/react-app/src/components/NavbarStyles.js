const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: "10px 20px",
    color: "#ffffff",
    fontSize: "14px",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logoContainer: {
    marginRight: "15px",
  },
  logo: {
    height: "40px",
  },
  locationContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: "20px",
    marginRight: "5px",
  },
  deliveryText: {
    fontSize: "12px",
    color: "#ccc",
  },
  locationText: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  middleContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    overflow: "hidden",
  },
  dropdownContainer: {
    display: "flex",
    alignItems: "center",
    color:'black'
  },
  dropdown: {
    border: "none",
    padding: "10px",
    backgroundColor: "#f3f3f3",
    fontSize: "14px",
    borderRight: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },
  searchButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#febd69",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
  searchIcon: {
    fontSize: "18px",
    color: "#111",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  language: {
    font:"black",
    position: "relative",
    display: "flex",
    cursor: "pointer",
    padding: "10px",
    // border: "1px solid #ccc",
    borderRadius: "5px",
   
  },
  flag: {
    width: "20px",
    marginRight: "5px",
  },
  dropdownArrow: {
    marginLeft: "5px",
    color: "#fff",
    // backgroundColor:"#000"
  },
  langDropdown: {
    position: "absolute",
    top: "40px",
    left: "0",
    width: "200px",
    backgroundColor: "#fff", // Ensure it's white
    border: "1px solid #ccc",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    zIndex: 10,
    display: "none", // Initially hidden
    color: "#000", // Ensure text is black
    fontSize: "10px",
  },
  option: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    color: "#000", // Ensure text is black
    backgroundColor: "#fff", // Ensure contrast with text
  },
  dropdownVisible: {
    display: "block", // Shown when hovered
  },
  
  radioButton: {
    marginRight: "10px",
  },

  account: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  greeting: {
    fontSize: "12px",
    color: "#ccc",
  },
  link: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  returns: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  smallText: {
    fontSize: "12px",
    color: "#ccc",
  },
  cart: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
  cartIcon: {
    fontSize: "18px",
  },
  cartCount: {
    backgroundColor: "#f08804",
    color: "#111",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  
};

  


export default styles;