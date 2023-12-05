import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCampus = () => {
  const axiosSecure = useAxiosSecure();
  const { data: campus = [], refetch } = useQuery({
    queryKey: "Campus",
    queryFn: async () => {
      const res = await axiosSecure.get("/campus");
      return res.data;
    },
  });
  return [campus, refetch];
};

export default useCampus;
