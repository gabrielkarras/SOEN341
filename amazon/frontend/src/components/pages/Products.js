import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Searchbar from "./Searchbar";
import Productdata from "./items.json";

function Products() {
  return (
    <>
      <div>
        <Searchbar placeholder="Enter Product Name..." data={Productdata} />
      </div>
    </>
  );
}

export default Products;
