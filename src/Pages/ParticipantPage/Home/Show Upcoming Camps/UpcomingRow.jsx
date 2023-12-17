/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { MdPublish } from "react-icons/md";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UpdateUpcomingCamp from "./UpdateUpcomingCamp";
import { PhotoView } from "react-photo-view";

const UpcomingRow = ({ camp, i, handleDelete, refetch, ORManganate }) => {
  const { user: user1 } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const axiosSecure = useAxiosSecure();
  //   const OrManagemant = {...ORManganate}
  const handlePublish = async (id, camp) => {
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
        }
      } catch (error) {
        console.error("Error deleting camp:", error);
      }
    }

    const menuItem = {
      camp_name: camp.camp_name,
      camp_fees: camp.camp_fees,
      scheduled_date_time: camp.scheduled_date_time,
      venue: camp.venue,
      specialized_service: camp.specialized_service,
      healthcare_professional: camp.healthcare_professional,
      target_audience: camp.target_audience,
      description: camp.description,
      image: camp.image,
      participants: 0,
      paymentStatus: "unpaid",
      confirmationStatus: "pending",
    };
    console.log(menuItem);
    const campRes = await axiosSecure.post("/campus", menuItem);
    console.log(campRes.data);
    if (campRes.data.insertedId) {
      // show success popup
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${camp.camp_name} is added to the Camps list`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <tr className="bg-gray-100 text-xs">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={camp?.image || user1?.photoURL}>
            <img
              className="h-12"
              src={camp?.image || user1?.photoURL}
              alt={camp?.camp_name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{camp?.camp_name}</td>
        <td className="py-2 px-4 border-b-4">{camp?.scheduled_date_time}</td>
        <td className="py-2 px-4 border-b-4">{camp?.venue}</td>
        <td className="py-2 px-4 border-b-4">
          {camp?.specialized_service?.slice(0, 10)}
        </td>
        <td className="py-2 px-4 border-b-4">
          {camp?.healthcare_professional?.slice(0, 10)}
        </td>
        <td className="py-2 px-4 border-b-4">{camp?.target_audience}</td>
        <td className="py-2 px-4 border-b-4">
          {camp?.description.slice(0, 20)}
        </td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <button className="flex justify-center m-1 p-1 rounded bg-[#6db2da]">
            <span className="text-4xl">Accept</span>
          </button>
        </td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex justify-center m-1 p-1 rounded bg-[#6db2da]"
          >
            <span className="text-4xl">
              <MdOutlineSecurityUpdateGood />
            </span>
          </button>
          <UpdateUpcomingCamp
            refetch={refetch}
            camp={camp}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </td>
        <td className="py-2 px-4 border-b-4">
          {
            <button
              onClick={() => handleDelete(camp._id, camp)}
              className={`${
                user1
                  ? "bg-red-500 text-white px-2 py-1 rounded ml-2 disabled"
                  : "bg-red-500 text-white px-2 py-1 rounded ml-2"
              }`}
            >
              <span className="text-3xl">
                <RiDeleteBin6Line />
              </span>
            </button>
          }
        </td>
        <td className="py-2 px-4 border-b-4">
          {/* {!OrManagemant?.interested > 2 ? ( */}
          <button
            onClick={() => handlePublish(camp._id, camp)}
            className={`${
              user1
                ? "bg-red-500 text-white px-2 py-1 rounded ml-2 disabled"
                : "bg-red-500 text-white px-2 py-1 rounded ml-2"
            }`}
          >
            <span className="text-3xl">
              <MdPublish />
            </span>
          </button>
          {/* ) : ( */}
          {/* <button
              className={`${
                user1
                  ? "bg-red-500 text-white px-2 py-1 rounded ml-2 disabled"
                  : "bg-red-500 text-white px-2 py-1 rounded ml-2"
              }`}
            >
              <span className="text-3xl">
                <MdPublish />
              </span>
            </button> */}
          {/* )} */}
        </td>
      </tr>
    </>
  );
};

export default UpcomingRow;
