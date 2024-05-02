import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
    <section>
      <form action="post" onSubmit={submitForm} className="flex flex-col">
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
          Contact Phone
          <input
            type="text"
            name="contactPhone"
            required
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
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

        <Button style="bg-blue-700">Add job</Button>
      </form>
    </section>
  );
};

export default AddJobPage;
