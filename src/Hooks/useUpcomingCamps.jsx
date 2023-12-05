import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUpcomingCamps = () => {

    const axiosPublic = useAxiosPublic();

    const {data: upcomingCamps = [], refetch} =  useQuery({
        queryKey:"upcomingCamps",
        queryFn: async ()=>{
            const res = await axiosPublic.get("/upcoming");
            return res.data;
        }
    })

    return [upcomingCamps,refetch]
};

export default useUpcomingCamps;