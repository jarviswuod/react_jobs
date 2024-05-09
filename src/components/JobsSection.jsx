import React from "react";

import { jobs } from "../../jobs.json";
import Button from "./Button";
import JobsList from "./JobsList";
import { Link } from "react-router-dom";

const JobsSection = ({ isHome }) => {
  const jobAvailable = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section>
      <div>
        <h2 className="text-4xl uppercase text-cyan-500 ">
          {isHome ? "Recent jobs" : "All jobs"}
        </h2>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-14">
          {jobAvailable.map((job, index) => (
            <JobsList key={index} job={job} />
          ))}
        </ul>
        {isHome && (
          <Button>
            <Link to="/jobs">More jobs</Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default JobsSection;
