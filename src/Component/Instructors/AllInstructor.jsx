import React, { useEffect, useState } from "react";
import InstructorCard from "../InstructorCard";

const AllInstructor = () => {
  const [allInstructors, setAllInstructors] = useState([]);

  useEffect(() => {
    // Fetching the JSON file
    fetch("https://school-project-server.vercel.app/instructor")
      .then((response) => response.json())
      .then((data) => setAllInstructors(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    document.title = "CricDemy | Instructors";
  }, []);
  return (
    <div>
      <h2 className="text-4xl shadow-lg hover:animate-bounce shadow-blue-500 w-1/3 m-auto font-semibold text-center my-20 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        Our Top Coaches From <br /> All Over The World
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {allInstructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
