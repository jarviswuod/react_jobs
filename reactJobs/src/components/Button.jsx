import React, { Children } from "react";

const Button = ({ children, style }) => {
  return (
    <button className={`border rounded p-3 px-6 ${style} text-white text-lg`}>
      {children}
    </button>
  );
};

export default Button;
