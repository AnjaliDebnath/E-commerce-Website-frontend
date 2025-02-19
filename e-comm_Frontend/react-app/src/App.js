
import './App.css';
import HomePage from './pages/HomePage.jsx';
import Cart from './components/Cart.jsx';
// import Products from './pages/Products.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Product from './pages/Product.js';
import axios from 'axios';
import { useEffect } from 'react';


const LINK = `http://localhost:5050`

function App() {
  // const token = local

  // useEffect(()=>{
  //   async function updateProfile(){
  //     const res = await axios.get(`${LINK}/tokensetup`, {
  //       headers: {Authorization: `Bearer ${token}`}
  //     })
  //   }
  // })
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<RegisterForm/>} /> 
        <Route path="/product" element={<Product/>} /> 
        
      </Routes>
    </Router>

    
    
  );
}

export default App;
