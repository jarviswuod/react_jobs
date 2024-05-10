import React from "react";
import HomeCards from "../components/HomeCards";
import JobsSection from "../components/JobsSection";

const HomePage = () => {
  return (
    <div>
      <HomeCards />
      <JobsSection isHome={true} />
    </div>
  );
};

export default HomePage;
