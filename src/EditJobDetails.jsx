import { useLoaderData } from "react-router-dom";
import Button from "./components/Button";
import { useState } from "react";

const EditJobDetails = ({ jobUpdatefunc }) => {
  const job = useLoaderData();
  console.log(job);

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [description, setDescription] = useState(job.description);
  const [location, setLocation] = useState(job.location);
  const [salary, setSalary] = useState(job.salary);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );

  const formSubmit = (e) => {
    e.preventDefault();

    const updatedjobForm = {
      title,
      type,
      description,
      location,
      salary,
      company: {
        contactEmail,
        contactPhone,
        name: companyName,
        description: companyDescription,
      },
    };
    jobUpdatefunc(updatedjobForm);
  };

  return (
    <section>
      <div>
        <form
          onSubmit={formSubmit}
          method="post"
          className="flex flex-col gap-4"
        >
          <label htmlFor="title">
            Title
            <input
              required
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label htmlFor="type">
            Type
            <input
              required
              type="text"
              name="type"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              required
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          <label htmlFor="location">
            Location
            <input
              required
              type="text"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </label>
          <label htmlFor="salary">
            Salary
            <input
              required
              type="text"
              name="salary"
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            />
          </label>
          <label htmlFor="name">
            Company Name
            <input
              required
              type="text"
              name="name"
              onChange={(e) => setContactEmail(e.target.value)}
              value={contactEmail}
            />
          </label>
          <label htmlFor="description">
            Company Description
            <input
              required
              type="text"
              name="description"
              onChange={(e) => setContactPhone(e.target.value)}
              value={contactPhone}
            />
          </label>
          <label htmlFor="contactEmail">
            Company ContactEmail
            <input
              required
              type="text"
              name="contactEmail"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
          </label>
          <label htmlFor="contactPhone">
            Company ContactPhone
            <input
              required
              type="text"
              name="contactPhone"
              onChange={(e) => setCompanyDescription(e.target.value)}
              value={companyDescription}
            />
          </label>

          <Button>Save</Button>
        </form>
      </div>
    </section>
  );
};

export default EditJobDetails;
