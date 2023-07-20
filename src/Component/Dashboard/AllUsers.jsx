import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const AllUsers = () => {
  const [user, setUser] = useState([]);

  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await axios.get(
      "https://school-project-server.vercel.app/user"
    );
    console.log(res);

    return res.data;
  });
  const queryClient = useQueryClient();

  const deleteUser = useMutation((userId) =>
    axios.delete(`https://school-project-server.vercel.app/user/${userId}`)
  );

  const makeUserAdmin = useMutation(({ userId }) =>
    axios.patch(`https://school-project-server.vercel.app/user/admin/${userId}`)
  );

  const handleMakeAdmin = (user) => {
    makeUserAdmin.mutate({ userId: user._id });
  };

  const handleDelete = (user) => {
    deleteUser.mutate(user._id);
  };

  useEffect(() => {
    document.title = "CricDemy | AllUsers";
  }, []);

  useEffect(() => {
    if (deleteUser.isSuccess) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${deleteUser.data.name} is Deleted successfully!`,
      });
      queryClient.invalidateQueries("users");
    }
  }, [deleteUser.isSuccess, deleteUser.data, queryClient]);

  useEffect(() => {
    if (makeUserAdmin.isSuccess) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${makeUserAdmin.data.name} is now an Admin!`,
      });
      queryClient.invalidateQueries("users");
    }
  }, [makeUserAdmin.isSuccess, makeUserAdmin.data, queryClient]);

  return (
    <div>
      <h3 className="text-3xl text-center my-10 font-semibold">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
