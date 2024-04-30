import { Link } from "react-router-dom";
import { jobs } from "../jobs.json";
import Button from "./Button";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";

const Jobs = ({ homeActive }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const jobslist = homeActive ? jobs.slice(0, 3) : jobs;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:6000/jobs");
        const data = await res.json();
        console.log(res);
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.error(`Error fetching data ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  });

  return (
    <div>
      <h1>{homeActive ? "Recent Jobs" : "Browse All Jobs"}</h1>
      <ul className="grid grid-cols-2 gap-6">
        {jobslist.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ul>
      {homeActive && (
        <Button style="bg-blue-700">
          <Link to="/jobs">View all jobs</Link>
        </Button>
      )}
    </div>
  );
};

export default Jobs;

// import { Link } from "react-router-dom";
// import { jobs } from "../jobs.json";
// import Button from "./Button";
// import JobCard from "./JobCard";

// const Jobs = ({ homeActive }) => {
//   const jobslist = homeActive ? jobs.slice(0, 3) : jobs;

//   return (
//     <div>
//       <h1>{homeActive ? "Recent Jobs" : "Browse All Jobs"}</h1>
//       <ul className="grid grid-cols-2 gap-6">
//         {jobslist.map((job, index) => (
//           <JobCard key={index} job={job} />
//         ))}
//       </ul>
//       {homeActive && (
//         <Button style="bg-blue-700">
//           <Link to="/jobs">View all jobs</Link>
//         </Button>
//       )}
//     </div>
//   );
// };

// export default Jobs;
