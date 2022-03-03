import React from "react";
import "../../../App.css";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import ProductDATA from "../items.json"
function Lifestyle() {
  return (
    <>
    <div > {ProductDATA.map((value, key) => {
      if(value.category=="Lifestyle"){
      return <Link to={`/product/${value._id}`}>
        <p >{value.name}</p> </Link>
    }})}</div>
    <Footer />
  </>
  );
}

export default Lifestyle;
