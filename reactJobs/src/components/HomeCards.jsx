import React from "react";
import Card from "./Card";
import Button from "./Button";

const HomeCards = () => {
  return (
    <section className="my-8 ">
      <div className="grid grid-cols-2 gap-6 gap-x-6">
        <Card style="bg-gray-100">
          <h2>For Developers</h2>
          <p>Browse our React jobs ans start your career today</p>
          <Button style="bg-black"> Browse Jobs</Button>
        </Card>

        <Card style="bg-indigo-100">
          <h2>For Employers</h2>
          <p>List your job to find the perfect developer for the role</p>
          <Button style="bg-blue-700">Add Job</Button>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
