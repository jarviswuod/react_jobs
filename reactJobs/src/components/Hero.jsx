import React from "react";

const Hero = ({ data = "no data", moreData = "nothing" }) => {
  return (
    <>
      <h1 className="font-bold">{data}</h1>
      <p className="text-3xl">{moreData}</p>
    </>
  );
};

export default Hero;
