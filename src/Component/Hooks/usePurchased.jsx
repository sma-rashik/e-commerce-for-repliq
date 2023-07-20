import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const usePurchased = () => {
  const { user } = useContext(AuthContext);

  const {
    refetch,
    isLoading,
    data: purchased = [],
  } = useQuery({
    queryKey: ["purchased", user?.email],

    queryFn: async () => {
      const res = await fetch(
        `https://school-project-server.vercel.app/purchased?email=${user?.email}`
      );

      return res.json();
    },
  });
  return [purchased, isLoading, refetch];
};
export default usePurchased;
