import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaCartShopping, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleToWishes } from "../../context/wishlistSlice";
const Products = ({ data }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  return (
    <Container maxWidth="lg">
      <div className="products">
        {data.map((product) => (
          <div key={product.id} className="card">
            <div className="image">
              <img src={product.thumbnail} alt={product.title} />
              <div className="navigation">
                <button className="cart">
                  <FaCartShopping />
                </button>
                <button
                  onClick={() => dispatch(toggleToWishes(product))}
                  className="like"
                >
                  {wishes.some((w) => w.id === product.id) ? (
                    <FaHeart className="likes" />
                  ) : (
                    <FaRegHeart className="likes" />
                  )}
                </button>
              </div>
            </div>
            <div className="content">
              <Link to={`/single/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <MdOutlineStar key={index} />
                ))}
              </div>
              <div className="prices">
                <h3>$494</h3>
                <h2>${product.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
