import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarSearchModel = ({ data, setSearchValue }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setSearchValue("");
  };

  if (!data || clicked) return null;

  let searchItems = data.map((el) => (
    <Link key={el.id} to={`/single/${el.id}`} onClick={handleClick}>
      <div className="searching__items">
        <img src={el.thumbnail} width={50} height={50} alt="" />
        <h4>{el.title}</h4>
      </div>
    </Link>
  ));

  return (
    <div className="navbar__search__result">
      {!data.length ? (
        <h3 style={{ color: "black" }}>Malumot topilmadi</h3>
      ) : (
        searchItems
      )}
    </div>
  );
};

export default NavbarSearchModel;
