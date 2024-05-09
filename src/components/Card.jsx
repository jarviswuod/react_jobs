import React from "react";

const Card = ({ style = "bg-cyan-100", children }) => {
  return <div className={`${style}`}>{children}</div>;
};

export default Card;
