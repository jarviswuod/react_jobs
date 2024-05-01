import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetailPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      <p>{job.title}</p>
      <p>{job.type}</p>
      <p>{job.description}</p>
      <Link to={`/jobs/edit/${job.id}`}>Edit Job</Link>
    </>
  );
};

const jobLoader = async ({ param }) => {
  const res = await fetch(`/api/jobs/${param.id}`);
  const data = await res.json();
  return data;
};

export { JobDetailPage as default, jobLoader };

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// const JobDetailPage = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [jobDetail, setJobDetail] = useState(true);

//   useEffect(() => {
//     const jobdetail = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         console.log(res);
//         console.log(data);
//         setJobDetail(data);
//       } catch (error) {
//         console.log(`An error occurred ${error}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     jobdetail();
//   }, []);

//   return loading ? (
//     <p>loading ...</p>
//   ) : (
//     <>
//       <p>{jobDetail.title}</p>
//       <p>{jobDetail.type}</p>
//       <p>{jobDetail.description}</p>
//     </>
//   );
// };

// export default JobDetailPage;
