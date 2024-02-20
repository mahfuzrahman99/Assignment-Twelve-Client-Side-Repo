import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/Popular Campus/SectionTitle";
import UpcomingRow from "./UpcomingRow";

const ManageUpcomingCamp = () => {
  const axiosSecure = useAxiosSecure();
  const { data: upcoming = [], refetch } = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const res = await axiosSecure.get("/upcoming");
      return res.data;
    },
  });
  const { data: ORManganate = [] } = useQuery({
    queryKey: ["ORManganate"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ORManganate");
      return res.data;
    },
  });

  const handleDelete = async (id, camp) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/upcoming/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${camp?.name} has been delete from Camp lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error deleting camp:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting camp.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-[300px] md:w-auto">
      <Helmet>
        <title>CareCampusPro | Manage Upcoming Camps</title>
      </Helmet>
      <div>
        <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE Upcoming campus"} />
      </div>
      <div className="">
        <div className="bg-gray-100 p-4 overflow-x-auto md:h-[70vh] overflow-y-auto">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Users: {upcoming.length}
          </h1>
          <div>
            <table className="min-w-full bg-gray-300 ">
              <thead className="rounded-t-xl bg-[#6db2da]">
                <tr className="rounded-t-xl bg-[#6db2da]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">IMAGE</th>
                  <th className="py-2 px-4 border-b">Camp Name</th>
                  <th className="py-2 px-4 border-b">Scheduled Date</th>
                  <th className="py-2 px-4 border-b">Venue</th>
                  <th className="py-2 px-4 border-b">Interested professional</th>
                  <th className="py-2 px-4 border-b">Participant count</th>
                  <th className="py-2 px-4 border-b">Audience</th>
                  <th className="py-2 px-4 border-b">Professionals status</th>
                  <th className="py-2 px-4 border-b">Accept Professionals</th>
                  <th className="py-2 px-4 border-b">Update</th>
                  <th className="py-2 px-4 border-b">Delete</th>
                  <th className="py-2 px-4 border-b">Publish</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((camp, i) => (
                  <UpcomingRow
                    key={camp._id}
                    handleDelete={handleDelete}
                    camp={camp}
                    ORManganate={ORManganate}
                    refetch={refetch}
                    i={i}
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

export default ManageUpcomingCamp;
