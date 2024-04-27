import React, { useState } from "react";
import Button from "./Button";

const JobCard = ({ job }) => {
  const [jobFullDesc, setJobFullDesc] = useState(false);
  let description = jobFullDesc
    ? job.description
    : job.description.slice(0, 90) + " ...";

  return (
    <li key={job.id} className="">
      <h3>{job.title}</h3>
      <p>{job.type}</p>
      {description}
      <button onClick={() => setJobFullDesc((prev) => !prev)}>
        {jobFullDesc ? "Less" : "More"}
      </button>
      <p>{job.salary}</p>
      <a href={`/jobs/${job.id}`}>
        <Button style="bg-blue-700">Read More</Button>
      </a>
    </li>
  );
};

export default JobCard;
