import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const JobsList = ({ job }) => {
  const [showLongDescription, setShowLongDescription] = useState(false);
  const descriptionText = showLongDescription
    ? job.description.slice(0, 90) + " ..."
    : job.description;
  return (
    <li>
      <p>{job.type}</p>
      <p>{job.title}</p>
      <p onClick={() => setShowLongDescription((prev) => !prev)}>
        {descriptionText}{" "}
        <button>{showLongDescription ? "More" : "Less"}</button>
      </p>
      <p>{job.salary}</p>
      <p>{job.location}</p>

      <Button>
        <Link to={`/jobs/${job.id}`}>Read more</Link>
      </Button>
    </li>
  );
};

export default JobsList;
