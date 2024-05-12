import React from "react";
import { CiSearch } from "react-icons/ci";
import Button from "@mui/material/Button";
import image from "../../assets/images/hero__img.svg";
import { Container } from "@mui/material";
import HeroCards from "../heroCards/HeroCards";
const Hero = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(152.04deg, rgb(56, 54, 56) 1.732%, rgb(11, 11, 11) 27.783%)",
        }}
      >
        <Container maxWidth="lg">
          <br />
          <br />
          <br />
          <div className="hero">
            <div className="hero__title">
              <h1>Discover Most Suitable Watches</h1>
              <p>
                Find the best, reliable, and cheap smart watches here. We focus
                on product quality. Here you can find smart watches of almost
                all brands. So why you are waiting? Just order now!
              </p>
              <div className="search__input">
                <CiSearch className="icon" />
                <input type="text" placeholder="Find the best brands" />
                <Button variant="contained">Search</Button>
              </div>
            </div>
            <img src={image} alt="hero" />
          </div>
        </Container>
      </div>
      <Container maxWidth="lg">
        <HeroCards />
      </Container>
    </>
  );
};

export default Hero;
