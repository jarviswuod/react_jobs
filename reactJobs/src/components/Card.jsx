import React from "react";

const Card = ({ card }) => {
  return (
    <div className="bg-[tomato]">
      <h1>{card.title}</h1>
      <p>{card.content}</p>
      <p>{card.comp_1}</p>
      <p>{card.comp_2}</p>
    </div>
  );
};

export default Card;
