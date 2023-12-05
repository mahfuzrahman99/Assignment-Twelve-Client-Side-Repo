import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useJoinCamp = () => {
  const axiosSecure = useAxiosSecure();

  const { data: joinCamp = [], refetch } = useQuery({
    queryKey: ["joinCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get("camp_details");
      return res.data;
    },
  });

  return [joinCamp, refetch];
};

export default useJoinCamp;
