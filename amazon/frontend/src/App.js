import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import "./App.css";
import HomePage from "./components/pages/HomePage.js";
import Products from "./components/pages/Products.js";
import Fitness from "./components/pages/Categories/Fitness.js";
import Entertainment from "./components/pages/Categories/Entertainment.js";
import Gaming from "./components/pages/Categories/Gaming.js";
import Lifestyle from "./components/pages/Categories/Lifestyle.js";
import Medical from "./components/pages/Categories/Medical.js";
import Pets_and_Animals from "./components/pages/Categories/Pets and Animals.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailedProductpage from "./components/pages/DetailedProductpage/DetailedProductpage.js";
import CartPage from "./components/pages/CartPage/CartPage.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Lifestyle" exact element={<Lifestyle />} />
          <Route path="/Medical" exact element={<Medical />} />
          <Route path="/Pets_and_Animals" exact element={<Pets_and_Animals />}/>
          <Route path="/Gaming" exact element={<Gaming />} />
          <Route path="/:Entertainment" exact element={<Entertainment />} />
          <Route path="/Fitness" exact element={<Fitness />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/product/:id" element={<DetailedProductpage />} />
          <Route path="/cart/:id">
          <Route path="" element={<CartPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
