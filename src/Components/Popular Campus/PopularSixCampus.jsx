import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import PopularOneCampCard from "./PopularOneCampCard";

const PopularSixCampus = () => {
  const axiosPublic = useAxiosPublic();

  const { data: campus = [] } = useQuery({
    queryKey: "campus",
    queryFn: async () => {
      const res = await axiosPublic.get("/campus");
      return res.data;
    },
  });
  console.log(campus);

  return (
    <div className="mb-6 md:mb-16">
      <SectionTitle
        heading={"Most Registered Camps"}
        subHeading={"Hurry Up.."}
      />
      <div className="max-w-6xl mx-auto mt-6 md:mt-24 md:grid grid-cols-2 space-y-2 md:space-y-0 justify-between gap-3">
        {campus.slice(0, 6).map((camp) => (
          <PopularOneCampCard key={camp.id} camp={camp} />
        ))}
      </div>
      <div className="flex justify-end max-w-6xl mx-auto my-3">
        <Link to={"/availableCamps"}>
          <button className="btn ">See All Camps</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularSixCampus;
