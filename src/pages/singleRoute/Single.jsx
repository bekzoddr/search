import React, { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import axios from "../../api";
import Loading from "../../components/loading/Loading";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Products from "../../components/products/Products";
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Container } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SingleRoute() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleImageClick = (image, index) => {
    setSelectedImage(image === product?.thumbnail ? product?.thumbnail : image);
    setSelectedImageIndex(index);
  };

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="links">
        <Link to={"/"}>Home</Link>/<h4>{product?.category}</h4>/
        <h4>{product?.title}</h4>
      </div>
      <br />
      <br />
      <br />
      <div className="single__page containerr">
        <div className="productImages">
          <img
            width={375}
            height={300}
            src={selectedImage || product?.thumbnail}
            alt=""
          />
          <div className="bottom__images default_images">
            {product?.images.map((image, index) => (
              <img
                key={index}
                className={selectedImageIndex === index ? "selected" : ""}
                width={85}
                height={85}
                src={image}
                alt="product-image"
                onClick={() => handleImageClick(image, index)}
              />
            ))}
          </div>
          <div className="bottom__images responsive_images">
            {product?.images.map((image, index) => (
              <img
                key={index}
                className={selectedImageIndex === index ? "selected" : ""}
                width={85}
                height={85}
                src={image}
                alt="product-image"
                onClick={() => handleImageClick(image, index)}
              />
            ))}
          </div>
        </div>
        <div className="product__data">
          <h2>{product?.title}</h2>
          <div className="reviews">
            {[...Array(4)].map((_, index) => (
              <IoStarSharp className="star" key={index} />
            ))}
            <IoStarSharp />
            <p>0 reviews</p>
            <p className="sub">Submit a review</p>
          </div>
          <br />
          <hr />
          <br />
          <div className="prices">
            <h2>${product?.price}</h2>
            <h3>$534,33</h3>
            <h4>24% Off</h4>
          </div>
          <div className="infos">
            <ul className="first">
              <li>Availability:</li>
              <li>Category:</li>
              <li>Free shipping</li>
            </ul>
            <ul>
              <li>In stock</li>
              <li>Accessories</li>
            </ul>
          </div>
          <br />
          <hr />
          <br />
          <div className="color">
            <h3>Select Color:</h3>
            <div className="colors">
              <div className="blue"></div>
              <div className="red"></div>
              <div className="black"></div>
              <div className="yellow"></div>
            </div>
          </div>
          <div className="size">
            <h3>Size</h3>
            <select name="" id="">
              <option value="size">Size</option>
              <option value="1">XS</option>
              <option value="2">L</option>
              <option value="3">2XL</option>
              <option value="4">M</option>
            </select>
          </div>
          <br />
          <hr />
          <br />
          <div className="buttons">
            <div className="counter">
              <button>+</button>
              <h2 className="text">2</h2>
              <button>-</button>
            </div>
            <div className="navigations">
              <button>
                <RiShoppingCart2Line /> Add to cart
              </button>
              <button>
                <FaRegHeart />
              </button>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="social-media">
            <button className="facebook">
              <FaFacebookF className="icon" />
              <h4>Share on Facebook</h4>
            </button>
            <button className="twitter">
              <FaTwitter className="icon" />
              <h4>Share on Twitter</h4>
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Container maxWidth="lg">
        {" "}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {product?.description}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aperiam dicta laboriosam inventore modi, eum explicabo totam
            consequatur aliquid neque culpa autem hic facilis id perspiciatis.
            Quis dolorum quasi accusamus nostrum? Illum odio sunt obcaecati
            reiciendis officia exercitationem porro culpa.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {product?.description}{" "}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {product?.description}{" "}
          </CustomTabPanel>
        </Box>
      </Container>
      <Products title="RELATED PRODUCTS" data={data.slice(4, 8)} />
    </Container>
  );
}
