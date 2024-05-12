import React from "react";
import Button from "@mui/material/Button";
import image from "../../assets/images/apple__watch.svg";
const Wrapper = () => {
  return (
    <div className="form">
      {" "}
      <div className="wrapper__form">
        <div className="wrapper__title">
          <h1>Subscribe To Newsletter</h1>
          <p>Get free guide about smart watches daily. </p>
          <div className="search__input">
            <input type="text" placeholder="Enter Email Address" />
            <Button variant="contained">Subscribe</Button>
          </div>
        </div>
        <div className="wrapper__image">
          <img src={image} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
