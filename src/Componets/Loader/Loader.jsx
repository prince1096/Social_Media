import React from "react";

import Eclipse from "../../assets/Eclipse.png";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="spinner_loader">
      <div>
        <img src={Eclipse} alt="" />
      </div>
    </div>
  );
};

export default Loader;
