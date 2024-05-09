import React from "react";

const Button = ({ style = "bg-indigo-500", children }) => {
  return <button className={`${style} text-white p-2 px-8`}>{children}</button>;
};

export default Button;
