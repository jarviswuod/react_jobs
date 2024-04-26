import { jobs } from "../jobs.json";
import JobCard from "./JobCard";

const Jobs = ({ homeActive }) => {
  const jobslist = homeActive ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      <h1>{homeActive ? "Recent Jobs" : "Browse All Jobs"}</h1>
      <ul className="grid grid-cols-2 gap-6">
        {jobslist.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
