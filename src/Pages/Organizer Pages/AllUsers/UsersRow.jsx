/* eslint-disable react/prop-types */
import { MdSecurityUpdateGood } from "react-icons/md";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { PhotoView } from "react-photo-view";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UsersRow = ({ user, i, handleRemove,refetch }) => {
  const { user: user1 } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // console.log(user._id)
  const handleUpdateUserRole = async (event) => {
    const role = event.target.innerText;
    
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to update his/shes role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update his/shes role!",
    });

    if (confirmed.isConfirmed) {
      try {
        console.log(role);
        const res = await axiosSecure.patch(`/users/${user._id}`, {role});
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "maked!",
            text: `${user?.name} has been maked ${user.role}.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error updating his/shes role", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating his/shes role.",
          icon: "error",
        });
      }
    }
  };
  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={user.photoURL || user1.photoURL}>
            <img
              className="h-6"
              src={user.photoURL || user1.photoURL}
              alt={user.name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{user.name}</td>
        <td className="py-2 px-4 border-b-4">{user.email}</td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <p className="text-lg">{user.role}</p>
        </td>
        <td className="py-2 px-4 border-b-4">
          <div className="w-full col-span-2">
            <div className="dropdown dropdown-bottom dropdown-end text-[#47b2f1] text-3xl rounded">
              <div tabIndex={0} role="button" className="">
                <button
                  className=""
                >
                  <MdSecurityUpdateGood size={40}/>
                </button>
              </div>
              <ul
                onClick={handleUpdateUserRole}
                tabIndex={0}
                className="dropdown-content z-[1] text-lg text-white bg-[#47b2f1] menu shadow bg-opacity-90 rounded-box w-30"
              >
                <li>
                  <a>Organizer</a>
                </li>
                <li>
                  <a>Participant</a>
                </li>
                <li>
                  <a>Professional</a>
                </li>
              </ul>
            </div>
          </div>
        </td>
        <td className="py-2 px-4 border-b-4">
            <button
              onClick={() => handleRemove(user._id, user)}
              className="bg-red-500 text-white text-3xl p-2 rounded ml-2"
            >
              <IoPersonRemoveOutline />
            </button>
        </td>
      </tr>
    </>
  );
};

export default UsersRow;
