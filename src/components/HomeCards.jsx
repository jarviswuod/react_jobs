import React from "react";
import Card from "./Card";
import Button from "./Button";

const HomeCards = () => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 gap-12">
        <Card>
          <h2>For developers</h2>
          <p>Browse our react jobs and start your career today</p>
          <Button style="bg-black">Browse Jobs</Button>
        </Card>

        <Card style="bg-gray-200">
          <h2>For Employers</h2>
          <p>List your job find the perfect developer for the role</p>
          <Button>Add Job</Button>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
