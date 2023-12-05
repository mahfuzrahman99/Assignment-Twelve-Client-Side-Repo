import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useParticipant = () => {
  const axiosPublic = useAxiosPublic();

  const { data: participants = [], refetch } = useQuery({
    queryKey: "participants",
    queryFn: async () => {
      const res = await axiosPublic.get("/participants");
      // Add an "index" property to each participant object
      const participantsWithIndex = res.data.map((participant, index) => ({
        ...participant,
        index: index + 1,
      }));
      return [participantsWithIndex, participants, refetch];
    },
  });

  return <div></div>;
};

export default useParticipant;
