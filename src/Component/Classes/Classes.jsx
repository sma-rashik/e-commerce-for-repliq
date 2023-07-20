import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { Link } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetching the JSON file
    fetch("https://school-project-server.vercel.app/classes")
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error(error));
  }, []);

  const getTopClasses = () => {
    // Sort classes based on the number of students in descending order
    const sortedClasses = classes.sort(
      (a, b) => b.availableSeats - a.availableSeats
    );

    // Return the top 6 classes
    return sortedClasses.slice(0, 6);
  };

  const topClasses = getTopClasses();

  return (
    <>
      <h2 className="text-4xl hover:animate-bounce shadow-lg shadow-blue-500 w-full md:w-1/3 m-auto font-semibold text-center my-20 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        Our Top Classes From <br /> The Best Coaches
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {topClasses.map((singleClass, index) => (
          <ClassCard key={index} singleClass={singleClass} />
        ))}
      </div>
      <Link to="/allclass" className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See All
        </button>
      </Link>
    </>
  );
};

export default Classes;
