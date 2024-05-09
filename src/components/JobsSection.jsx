import React, { useEffect, useState } from "react";

import Button from "./Button";
import JobsList from "./JobsList";
import { Link } from "react-router-dom";

const JobsSection = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    const loadedJobs = async () => {
      try {
        const res = await fetch(url);
        const jobs = await res.json();
        setJobs(jobs);
      } catch (err) {
        console.log(`Error was caused by ${err}`);
      } finally {
        setLoading(false);
      }
    };
    loadedJobs();
  }, []);

  return (
    <section>
      <div>
        <h2 className="text-4xl uppercase text-cyan-500 ">
          {isHome ? "Recent jobs" : "All jobs"}
        </h2>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-14">
              {jobs.map((job, index) => (
                <JobsList key={index} job={job} />
              ))}
            </ul>
            {isHome && (
              <Button>
                <Link to="/jobs">More jobs</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsSection;
