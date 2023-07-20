import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
const useCourse = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: course = [] } = useQuery({
    queryKey: ["courses", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/purchased?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [course, refetch];
};
export default useCourse;
