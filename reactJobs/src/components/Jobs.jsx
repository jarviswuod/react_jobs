import { Link } from "react-router-dom";
import { jobs } from "../jobs.json";
import Button from "./Button";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";

const Jobs = ({ homeActive }) => {
  const [jobslist, setJobsListing] = useState([]);
  const [loading, setLoading] = useState(true);

  // const jobslist = homeActive ? jobs.slice(0, 3) : jobs;

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = homeActive
        ? "http://localhost:8000/jobs?_limit=3"
        : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        console.log(data);
        setJobsListing(data);
      } catch (error) {
        console.log(`Error fetching data ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>{homeActive ? "Recent Jobs" : "Browse All Jobs"}</h1>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <ul className="grid grid-cols-2 gap-6">
          {jobslist.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </ul>
      )}
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
