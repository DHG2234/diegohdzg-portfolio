import React from "react";
import { WorkItem } from "@layout";

const data = [
  {
    year: "2022 - 2024",
    title: "General Assistant – Makimore Sushi",
    duration: "2 years",
    details: `I developed skills such as teamwork, customer service, and how to react in a crisis.
    I implemented practices to improve the efficiency in the creation and management of resources, 
    reducing errors and time for optimal use.
    I provided solutions such as pre-preparing delivery orders by organizing the items so that only 
    the dish or dishes need to be added and sealed for delivery to the customer.`
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="title text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
