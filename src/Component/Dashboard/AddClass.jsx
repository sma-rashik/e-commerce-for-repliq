import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.availableSeats = parseFloat(data.availableSeats);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, instructor, price, availableSeats } = data;
          const newClass = {
            name,
            instructor,
            price,
            availableSeats,

            image: imgURL,
          };

          console.log(newClass);

          fetch("https://school-project-server.vercel.app/classes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newClass),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("after posting new class", data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Class added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });

    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add a Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Class Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Class Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Instructor Name</label>
            <input
              type="text"
              {...register("instructor", { required: true })}
              className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Instructor Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Available Seats</label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Price</label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
