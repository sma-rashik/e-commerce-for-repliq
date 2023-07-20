import React, { useEffect, useState } from "react";
import InstructorCard from "../InstructorCard";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetching the JSON file
    fetch("https://school-project-server.vercel.app/instructor")
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.error(error));
  }, []);

  // Sort instructors based on the number of students in descending order
  const sortedInstructors = instructors.sort(
    (a, b) => b.numOfStudents - a.numOfStudents
  );

  // Slice the top 6 instructors
  const topInstructors = sortedInstructors.slice(0, 6);

  // Remaining instructors for the "See All" button
  const remainingInstructors = sortedInstructors.slice(6);

  return (
    <>
      <h2 className="text-4xl shadow-lg hover:animate-bounce shadow-blue-500 w-full md:w-1/3 m-auto font-semibold text-center my-20 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        Our Top Coaches From <br /> All Over The World
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {topInstructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>

      {remainingInstructors.length > 0 && (
        <Link to="/instructors" className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See All
          </button>
        </Link>
      )}
    </>
  );
};

export default Instructors;
