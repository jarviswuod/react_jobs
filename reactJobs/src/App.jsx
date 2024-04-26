import React from "react";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <div>
      <Hero data="Hello world!" moreData="Just a normal hero section" />
      <Hero />
      <HomeCards />
    </div>
  );
};

export default App;
