import React from "react";
import { watchCards } from "../../static/index";
const HeroCards = () => {
  const cards = watchCards.map((card) => {
    return (
      <div key={card.id} className="card">
        <img src={card.image} alt="" />
        <div className="title">
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    );
  });
  return <div className="card__boxes">{cards}</div>;
};

export default HeroCards;
