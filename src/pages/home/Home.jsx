import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import axios from "../../api/index";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "../../components/loading/Loading";
import Users from "../../components/users/Users";
import Wrapper from "../../components/wrapper/Wrapper";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(3);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=${count}`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [count]);

  return (
    <div>
      <Hero />
      <br />
      <br />
      <br />
      <div className="product__title">
        <p>Find your favourite smart watch.</p>
        <h2>Our Latest Products</h2>
      </div>
      <br />
      <br />
      {loading ? <Loading /> : <Products data={data} />}
      <div className="loader__btn container">
        <br />
        <br />
        <br />
        <br />
        <Button
          variant="outlined"
          onClick={() => setCount((prevCount) => prevCount + 3)}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "See more"}
        </Button>
      </div>
      <br />
      <br />
      <br />
      <div className="product__title">
        <p>Here are our some of the best clients.</p>
        <h2>What People Say About Us</h2>
      </div>
      <br />
      <br />
      <Users />
      <br />
      <br />
      <br />
      <br />
      <Wrapper />
    </div>
  );
};

export default Home;
