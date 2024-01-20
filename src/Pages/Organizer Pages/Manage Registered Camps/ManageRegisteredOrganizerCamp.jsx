
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import ManageRegisteredRow from "./ManageRegisteredRow";

const ManageRegisteredOrganizerCamp = () => {
  const axiosPublic = useAxiosPublic();

  const { data: participants = [], refetch, isLoading } = useQuery({
    queryKey: "participants",
    queryFn: async () => {
      const res = await axiosPublic.get("/participants");
      return res.data;
    },
  });

  if(isLoading){
    return
  }

  return (
    <div className="max-w-4xl mx-auto mb-24 w-[300px]  md:w-auto">
      <Helmet>
        <title>CareCampusPro | Manage Registered Camps</title>
      </Helmet>
      <SectionTitle heading={"Manage Registered Camps"} subHeading={"Hurry Up..."} />
      <div className="overflow-x-auto">
        <div className="bg-white p-4">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Users: {participants.length}
          </h1>
          <div>
            <table className="min-w-full bg-white">
              <thead className="rounded-t-xl bg-[#6db2da]">
                <tr>
                  <th className="py-2 px-4 border-b">No</th>
                  <th className="py-2 px-4 border-b">Camp Name</th>
                  <th className="py-2 px-4 border-b">Date and Time</th>
                  <th className="py-2 px-4 border-b">Venue</th>
                  <th className="py-2 px-4 border-b">Camp Fees</th>
                  <th className="py-2 px-4 border-b">Payment Status</th>
                  <th className="py-2 px-4 border-b">Confirmation Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {participants?.map((participant, i) => (
                  <ManageRegisteredRow
                    key={participant._id}
                    isLoading={isLoading}
                    participant={participant}
                    i={i}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRegisteredOrganizerCamp;
