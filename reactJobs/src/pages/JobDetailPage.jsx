import { Link, useLoaderData } from "react-router-dom";

const JobDetailPage = () => {
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

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobDetailPage as default, jobLoader };
