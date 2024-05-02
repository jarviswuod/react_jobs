import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("under $50k");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newJob = {
      title,
      description,
      type,
      salary,
      location,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    addJobSubmit(newJob);
    return navigate("/jobs");
  };

  return (
    <>
      <section>
        <form action="post" onSubmit={submitForm}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            required
            value={type}
            onChange={(e) => e.target.value}
          >
            <option value="full-time">Full Time</option>
            <option value="full-time">Full Time</option>
            <option value="full-time">Full Time</option>
            <option value="full-time">Full Time</option>
          </select>

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="contactEmail">ContactEmail</label>
          <input
            type="text"
            name="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <label htmlFor="contactPhone">ContactPhone</label>
          <input
            type="text"
            name="contactPhone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
          <label htmlFor="companyName">CompanyName</label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="companyDescription">CompanyDescription</label>
          <input
            type="text"
            name="companyDescription"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h1>AddJobPage</h1>
          <h1>AddJobPage</h1>
        </form>
      </section>
    </>
  );
};

export default AddJobPage;
