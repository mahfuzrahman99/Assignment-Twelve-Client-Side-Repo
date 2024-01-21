import { useQuery } from "@tanstack/react-query";
import UsersRow from "./UsersRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  //   const [, refetch] = useCart()
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRemove = async (user) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove him!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove him!",
    });
    if (confirmed.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/users/${user._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: `${user?.name} has been Removed from users lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error removing user:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while Removing User.",
          icon: "error",
        });
      }
    }
  };

 

  return (
    <div className="max-w-4xl mx-auto w-[300px] md:w-auto ">
      <div>
        <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL USERS"} />
      </div>
      <div className="overflow-x-auto">
        <div className="bg-white p-4 ">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Users: {users.length}
          </h1>
          <div>
            <table className="min-w-full bg-white">
              <thead className="rounded-t-xl bg-[#47b2f1]">
                <tr className="rounded-t-xl bg-[#47b2f1]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">IMAGE</th>
                  <th className="py-2 px-4 border-b">NAME</th>
                  <th className="py-2 px-4 border-b">EMAIL</th>
                  <th className="py-2 px-4 border-b">ROLE</th>
                  <th className="py-2 px-4 border-b">EDIT</th>
                  <th className="py-2 px-4 border-b">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <UsersRow
                    key={user._id}
                    handleRemove={handleRemove}
                    refetch={refetch}
                    user={user}
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

export default AllUsers;
