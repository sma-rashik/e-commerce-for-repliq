import { useEffect, useState } from "react";

const useInstructor = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://school-project-server.vercel.app/Classes ")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};

export default useInstructor;
