import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
//import Footer from './components/Footer.js';
//<Footer />
import "./App.css";
import HomePage from "./components/pages/HomePage.js";
import Products from "./components/pages/Products.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/Products.js" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
