import React from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section>
      <div>
        <p>JobDetailsPage</p>
        <p>JobDetailsPage</p>
      </div>
    </section>
  );
};

export default JobDetailsPage;
