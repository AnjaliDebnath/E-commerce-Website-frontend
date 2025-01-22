import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch , useSelector} from "react-redux";
import axios from "axios";
import { setCurrentUser } from "../slices/AuthSlice";

const LINK = `http://localhost:5050`;


const Sidebar = ({ closeSidebar }) => {
  const dispatch = useDispatch();
  // const [user, setuser] = useState("");
  const user = useSelector((state)=>state.auth.currentUser)

  useEffect(() =>{
    async function userDetails(token){
      try{
        const res = await axios.get(`${LINK}/users/me`,{
          headers: {Authorization: `Bearer ${token}`}
        })
        // console.log(res.data);
        dispatch(setCurrentUser({username: res.data}))
      } catch(err){
        console.error("Error in navbar",err.message);
      }
    }
    userDetails(localStorage.getItem('accessToken')); 
  }, [user])

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 999,
    },
    sidebar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "300px",
      height: "100%",
      backgroundColor: "#fff",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
      overflowY: "auto",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "20px",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    header: {
      backgroundColor: "#232f3e",
      color: "#fff",
      padding: "15px",
      fontSize: "18px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 1001,
    },
    section: {
      padding: "15px",
      borderBottom: "1px solid #ddd",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    link: {
      display: "block",
      color: "black",
      textDecoration: "none",
      padding: "5px 0",
      cursor: "pointer",
    },
    seeAll: {
      color: "black",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px",
      display: "inline-block",
    },
  };

  return (
    <>
      {/* Overlay */}
      <div style={styles.overlay} onClick={closeSidebar}></div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Header */}
        <div style={styles.header}>
          <span>Hello, {user}</span>
          <button style={styles.closeButton} onClick={closeSidebar}>
            &times;
          </button>
        </div>

        {/* Trending Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Trending</div>
          <a style={styles.link}>Best Sellers</a>
          <a style={styles.link}>New Releases</a>
          <a style={styles.link}>Movers and Shakers</a>
        </div>

        {/* Digital Content and Devices Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Digital Content and Devices</div>
          <a style={styles.link}>Amazon miniTV - FREE entertainment</a>
          <a style={styles.link}>Echo & Alexa</a>
          <a style={styles.link}>Fire TV</a>
          <a style={styles.link}>Kindle E-Readers & eBooks</a>
          <a style={styles.link}>Audible Audiobooks</a>
          <a style={styles.link}>Amazon Prime Video</a>
          <a style={styles.link}>Amazon Prime Music</a>
        </div>

        {/* Shop by Category Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Shop by Category</div>
          <a style={styles.link}>Mobiles, Computers</a>
          <a style={styles.link}>TV, Appliances, Electronics</a>
          <a style={styles.link}>Men's Fashion</a>
          <a style={styles.link}>Women's Fashion</a>
          <span style={styles.seeAll}>See all &#9660;</span>
        </div>

        {/* Programs & Features Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Programs & Features</div>
          <a style={styles.link}>Amazon Pay</a>
          <a style={styles.link}>Gift Cards & Mobile Recharges</a>
          <a style={styles.link}>Amazon Launchpad</a>
          <a style={styles.link}>Amazon Business</a>
          <span style={styles.seeAll}>See all &#9660;</span>
        </div>

        {/* Help & Settings Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Help & Settings</div>
          <a style={styles.link}>Your Account</a>
          <a style={styles.link}>Customer Service</a>
          <a style={styles.link}>Logout</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
