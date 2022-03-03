import React from "react";
import "../../../App.css";
import Footer from "../../Footer";
import ProductDATA from "../items.json"
import { Link } from "react-router-dom";
function Gaming() {
  return (
    <>
    <div > {ProductDATA.map((value, key) => {
      if(value.category=="Gaming"){
      return <Link to={`/product/${value._id}`}>
        <p >{value.name}</p> </Link>
    }})}</div>
    <Footer />
  </>
  );
}

export default Gaming;
