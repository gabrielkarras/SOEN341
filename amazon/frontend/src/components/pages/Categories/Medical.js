import React from "react";
import "../../../App.css";
import Footer from "../../Footer";
import ProductDATA from "../items.json";
import { Link } from "react-router-dom";

function Medical() {
  return (
    <>
      <div>
        {" "}
        {ProductDATA.map((value, key) => {
          if (value.category == "Medical") {
            return (
              <Link to={`/Products.js/${value._id}`}>
                <p>{value.name}</p>{" "}
              </Link>
            );
          }
        })}
      </div>
      <Footer />
    </>
  );
}

export default Medical;
