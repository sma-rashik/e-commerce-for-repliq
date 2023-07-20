import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBuy = (singleClass) => {
    if (user && user.email) {
      fetch(`https://school-project-server.vercel.app/purchased`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...singleClass, email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error && data.error.code === 11000) {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Oops...",
              text: "You have already purchased this class.",
            });
          } else if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Purchase Successful",
              text: "You have successfully purchased the class!",
            });
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Oops...",
              text: "Something went wrong with the purchase. Please try again.",
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong with the purchase. Please try again.",
          });
        });
    } else {
      Swal.fire({
        title: "Please Login First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-40 md:h-48"
        src={singleClass.image}
        alt=""
      />
      <div className="p-4">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          Course: {singleClass.name}
        </h5>
        <div>
          <ul>
            <li className="mt-2 flex gap-2 text- dark:text-gray-400">
              <FaArrowRight className="text-blue-700" /> Instructor name:{" "}
              {singleClass.instructor}
            </li>
            <li className="mt-2 flex gap-2 text-gray-900 dark:text-gray-400">
              <FaArrowRight className="text-blue-700" /> Available Seats:{" "}
              {singleClass.availableSeats}
            </li>{" "}
            <li className="mt-2 flex gap-2 text-gray-900 dark:text-gray-400">
              <FaArrowRight className="text-blue-700" /> Price: $
              {singleClass.price}
            </li>
          </ul>
        </div>

        <div className="mt-4 text-center cursor-pointer ">
          <button
            onClick={() => handleBuy(singleClass)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
