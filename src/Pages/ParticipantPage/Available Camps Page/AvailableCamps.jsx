import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AvailableCamp from "./AvailableCamp";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic();

  const { data: campus = [] } = useQuery({
    queryKey: "campus",
    queryFn: async () => {
      const res = await axiosPublic.get("/campus");
      return res.data;
    },
  });

  const [filteredCamps, setFilteredCamps] = useState([]);

  const handleSearchBlog = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredCamp = campus.filter(
      (camp) => camp.camp_name.toLowerCase() === enteredSearchValue
    );

    setFilteredCamps(filteredCamp);
  };

  const handleSearchCategory = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.category.value;
    e.target.reset();

    const filteredBlog = campus.filter(
      (blog) => blog.venue === enteredSearchValue
    );

    setFilteredCamps(filteredBlog);
  };

  const campsToDisplay = filteredCamps.length ? filteredCamps : campus;

  return (
    <div className="mb-8">
      <Helmet>
        <title>CareCampusPro | Available Camps</title>
      </Helmet>
      <SectionTitle heading={"all camps"} subHeading={"Hurry Up..."} />
      <div className="md:flex justify-between max-w-6xl mx-auto">
        <form
          onSubmit={handleSearchBlog}
          className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full md:w-1/3"
        >
          <button className="btn-group btn border-none border-l-2 w-1/3 border-gray-200 rounded-r-md">
            Search
          </button>
          <input
            type="text"
            name="search"
            placeholder="Search Here"
            className="pl-4 w-2/3 border-none"
          />
        </form>
        <form
          onSubmit={handleSearchCategory}
          className="border-2 border-gray-200 my-2 md:my-4 p-1 rounded-md flex w-full md:w-1/3"
        >
          <select
            className="w-full my-2 p-1 rounded-md"
            name="category"
            id="category"
          >
            <option value="">Select a venue</option>
            {campus.map((camp) => (
              <option key={camp._id} value={camp.venue}>
                {camp.venue}
              </option>
            ))}
          </select>
          <button className="btn-group btn border-none border-l-2 w-1/3 border-gray-200 rounded-r-md">
            Search
          </button>
        </form>
      </div>
      <div className="max-w-6xl mx-auto mt-5 md:grid grid-cols-2 space-y-2 md:space-y-0 justify-between gap-3">
        {campsToDisplay.map((camp) => (
          <AvailableCamp key={camp._id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;
