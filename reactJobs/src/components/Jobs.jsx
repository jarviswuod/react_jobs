import { jobs } from "../jobs.json";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <div>
      <h1>Jobs Avaibalbe</h1>
      <ul className="grid grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
