import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const JobDetailsPage = ({ deleteFunc }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  const jobDeleteFunc = (e) => {
    e.preventDefault();
    const popup = "Are you sure you want to delete the item?";
    console.log(popup);

    deleteFunc(job);
    return navigate("/jobs");
  };

  return (
    <section>
      <div>
        <form onSubmit={jobDeleteFunc}>
          <p>{job.id}</p>
          <p>{job.title}</p>
          <p>{job.type}</p>
          <p>{job.description}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>

          <p>{job.company.name}</p>
          <p>{job.company.description}</p>
          <p>{job.company.contactEmail}</p>
          <p>{job.company.contactPhone}</p>
          <Button>
            <Link to={`/jobs/${job.id}/edit`}>Edit job</Link>
          </Button>
          <Button style="bg-red-600">Delete job</Button>
        </form>
      </div>
    </section>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const result = await res.json();
  return result;
};

export { JobDetailsPage as default, jobLoader };
