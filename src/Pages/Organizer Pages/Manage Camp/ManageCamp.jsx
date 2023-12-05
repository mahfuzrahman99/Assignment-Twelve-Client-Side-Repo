import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import CampsRow from "../Manage Camp/CampsRow"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";

const ManageCamp = () => {
  const axiosSecure = useAxiosSecure();
  const { data: campus = [], refetch } = useQuery({
    queryKey: ["campus"],
    queryFn: async () => {
      const res = await axiosSecure.get("/campus");
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
        const res = await axiosSecure.delete(`/campus/${id}`);
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
    <div className="max-w-4xl mx-auto w-[300px] md:w-auto">
      <Helmet>
        <title>CareCampusPro | Manage Camps</title>
      </Helmet>
      <div>
        <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL campus"} />
      </div>
      <div>
        <div className="bg-gray-100 p-4 overflow-x-auto">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Users: {campus.length}
          </h1>
          <div>
            <table className="min-w-full bg-gray-300">
              <thead className="rounded-t-xl bg-[#6db2da]">
                <tr className="rounded-t-xl bg-[#6db2da]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">IMAGE</th>
                  <th className="py-2 px-4 border-b">Camp Name</th>
                  <th className="py-2 px-4 border-b">Scheduled Date</th>
                  <th className="py-2 px-4 border-b">Venue</th>
                  <th className="py-2 px-4 border-b">Services</th>
                  <th className="py-2 px-4 border-b">Professionals</th>
                  <th className="py-2 px-4 border-b">Audience</th>
                  <th className="py-2 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">Update</th>
                  <th className="py-2 px-4 border-b">Delete</th>
                </tr>
              </thead>
              <tbody>
                {campus.map((camp, i) => (
                  <CampsRow
                    key={camp._id}
                    handleDelete={handleDelete}
                    camp={camp}
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

export default ManageCamp;
