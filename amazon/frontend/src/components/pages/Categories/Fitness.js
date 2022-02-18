import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import Footer from "../../Footer";
import ProductDATA from "../items.json"
function Fitness() {
  return (
    <>
      <div > {ProductDATA.map((value, key) => {
        if(value.category=="Fitness"){
        return <Link to={`/Products.js/${value._id}`}>
          <p >{value.name}</p> </Link>
      }})}</div>
      <Footer />
    </>
  );
}

export default Fitness;
