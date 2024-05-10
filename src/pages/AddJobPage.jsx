import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const AddJobPage = ({ addJobFunc }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full time");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const addedJob = {
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
    addJobFunc(addedJob);
    return navigate("/jobs");
  };

  return (
    <section>
      <div>
        <form method="post" onSubmit={submitForm} className="flex flex-col">
          <label htmlFor="title">
            Title
            <input
              type="text"
              required
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label htmlFor="type">
            Type
            <input
              type="text"
              required
              name="type"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              type="text"
              required
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          <label htmlFor="location">
            Location
            <input
              type="text"
              required
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </label>
          <label htmlFor="salary">
            Salary
            <input
              type="text"
              required
              name="salary"
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            />
          </label>
          <label htmlFor="companyName">
            CompanyName
            <input
              type="text"
              required
              name="companyName"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
          </label>
          <label htmlFor="companyDescription">
            CompanyDescription
            <input
              type="text"
              required
              name="companyDescription"
              onChange={(e) => setCompanyDescription(e.target.value)}
              value={companyDescription}
            />
          </label>
          <label htmlFor="contactPhone">
            ContactPhone
            <input
              type="text"
              required
              name="contactPhone"
              onChange={(e) => setContactPhone(e.target.value)}
              value={contactPhone}
            />
          </label>
          <label htmlFor="contactEmail">
            ContactEmail
            <input
              type="text"
              required
              name="contactEmail"
              onChange={(e) => setContactEmail(e.target.value)}
              value={contactEmail}
            />
          </label>
          <Button>Save job</Button>
        </form>
      </div>
    </section>
  );
};

export default AddJobPage;
