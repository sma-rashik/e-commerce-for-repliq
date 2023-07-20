import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const AllClass = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    // Fetching the JSON file
    fetch("https://school-project-server.vercel.app/classes")
      .then((response) => response.json())
      .then((data) => setAllClasses(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    document.title = "CricDemy | All Classes";
  }, []);
  return (
    <>
      <h2 className="text-4xl hover:animate-bounce shadow-lg shadow-blue-500 w-1/3 m-auto font-semibold text-center my-20 text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
        Our Top Classes From <br /> The Best Coaches
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {allClasses.map((singleClass, index) => (
          <ClassCard key={index} singleClass={singleClass} />
        ))}
      </div>
    </>
  );
};

export default AllClass;
