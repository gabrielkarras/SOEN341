import React from "react";
import "../App.css";
import "./HPCenter.css";

import bckgrnd from "../images/lucrezia-carnelos-wQ9VuP_Njr4-unsplash.jpg";

function HPCenter() {
  return (
    <div
      className="hpc-container"
      style={{
        backgroundImage: `url(${bckgrnd})`,
        backgroundSize: "100% 70vh",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "60vh",
      }}
    >
      <h1>No less than the best</h1>
      <h2>Start shopping today!</h2>
    </div>
  );
}

export default HPCenter;
