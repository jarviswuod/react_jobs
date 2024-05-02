import { Link, useLoaderData, useNavigate } from "react-router-dom";

const JobDetailPage = ({ deleteJobFunc }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (jodId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the listing?"
    );

    if (!confirm) return;
    deleteJobFunc(jodId);
    navigate("/jobs");
  };

  return (
    <>
      <p>{job.title}</p>
      <p>{job.type}</p>
      <p>{job.salary}</p>
      <p>{job.description}</p>

      <p>
        <Link to={`/jobs/edit/${job.id}`}>Edit Job</Link>
      </p>
      <button onClick={() => onDeleteClick(job.id)}>Delete</button>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobDetailPage as default, jobLoader };
