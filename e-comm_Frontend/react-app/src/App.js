
import './App.css';
import HomePage from './pages/HomePage.jsx';
import Cart from './components/Cart.jsx';
// import Products from './pages/Products.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} /> 
        
      </Routes>
    </Router>

    
    
  );
}

export default App;
