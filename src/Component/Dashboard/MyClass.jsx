import React, { useEffect, useState } from "react";
import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCourse from "../Hooks/useCourse";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [course, setCourse] = useCourse();
  const total = Array.isArray(course)
    ? course.reduce((sum, item) => item.price + sum, 0)
    : 0;

  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://school-project-server.vercel.app/purchased/${row._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              // Remove the deleted item from the course array
              const updatedCourse = course.filter(
                (item) => item._id !== row._id
              );
              setCourse(updatedCourse); // Update the course state with the new array
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  useEffect(() => {
    document.title = "CricDemy | MyClass";
  }, []);

  return (
    <>
      <div>
        <div className="overflow-x-auto mx-auto w-full md:w-4/6">
          <table className="table bg-purple-400 w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody className="shadow-2xl">
              {Array.isArray(course) &&
                course.map((row, index) => (
                  <tr key={row._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                          <img
                            src={row.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{row.name}</td>
                    <td>${row.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(row)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>
                      <Link to="/dashboard/payment">
                        {" "}
                        <button className="btn btn-ghost btn-lg">
                          <FaAmazonPay />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyClass;
