import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      {card.map((item) => {
        return (
          <div key={item.id}>
            <h1> {item.cardtitle}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
