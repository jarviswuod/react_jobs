import React from "react";
import Jobs from "../components/Jobs";

const JobsPage = ({ homeActive }) => {
  homeActive = false;
  return (
    <div>
      <Jobs homeActive={homeActive} />
    </div>
  );
};

export default JobsPage;
