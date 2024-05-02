import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const JobDetailsEdit = ({ updateJobDetail }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = useLoaderData();

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [location, setLocation] = useState(job.location);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);

  const submitFunc = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      description,
      salary,
      location,
      company: {
        name: companyName,
        description: companyDescription,
        contactPhone,
        contactEmail,
      },
    };
    updateJobDetail(updatedJob);
    navigate("/jobs");
  };

  return (
    <>
      <form action="POST" className="flex flex-col" onSubmit={submitFunc}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="type">
          Job type
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </label>
        <label htmlFor="salary">
          Job salary
          <select
            name="salary"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option value="Under $50K">Under $50K</option>
            <option value="$50K - 60K">$50K - $60K</option>
            <option value="$60K - 70K">$60K - $70K</option>
            <option value="$70K - 80K">$70K - $80K</option>
            <option value="$80K - 90K">$80K - $90K</option>
            <option value="$90K - 100K">$90K - $100K</option>
            <option value="$100K - 125K">$100K - $125K</option>
            <option value="$125K - 150K">$125K - $150K</option>
            <option value="$150K - 175K">$150K - $175K</option>
            <option value="$175K - 200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </label>

        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="companyName">
          Company Name
          <input
            type="text"
            name="companyName"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label htmlFor="companyDescription">
          Company Description
          <input
            type="text"
            name="companyDescription"
            required
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
        </label>
        <label htmlFor="contactEmail">
          Contact Email
          <input
            type="text"
            name="contactEmail"
            required
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </label>
        <label htmlFor="contactPhone">
          Concact Phone
          <input
            type="text"
            name="contactPhone"
            required
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
        </label>

        <button>Update job</button>
      </form>
    </>
  );
};

export default JobDetailsEdit;
