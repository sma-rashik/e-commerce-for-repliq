import React, { useEffect } from "react";
import useInstructor from "../Hooks/useInstructor";
import InstructorClassCard from "./InstructorClassCard";

const InstructorsClass = () => {
  const [instructors] = useInstructor();

  // Create a map to categorize classes by instructor name
  const classesByInstructor = instructors.reduce((acc, instructor) => {
    if (acc[instructor.instructor]) {
      acc[instructor.instructor].push(instructor);
    } else {
      acc[instructor.instructor] = [instructor];
    }
    return acc;
  }, {});
  useEffect(() => {
    document.title = "CricDemy | Instructors Classes";
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Instructors' Classes</h1>
      {Object.entries(classesByInstructor).map(([instructor, classes]) => (
        <div key={instructor}>
          <h2 className="text-xl font-bold mt-4 mb-2">{instructor}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {classes.map((instructor) => (
              <InstructorClassCard
                key={instructor._id}
                instructor={instructor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorsClass;
