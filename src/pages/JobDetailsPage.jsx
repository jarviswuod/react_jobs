import { Link, useLoaderData, useParams } from "react-router-dom";
import Button from "../components/Button";

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <section>
      <div>
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
