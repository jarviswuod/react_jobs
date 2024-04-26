import React from "react";

const JobCard = ({ job }) => {
  return (
    <li key={job.id} className="">
      <p>{job.title}</p>
      <p>{job.type}</p>
      <p>{job.description}</p>
      <p>{job.location}</p>
    </li>
  );
};

export default JobCard;
