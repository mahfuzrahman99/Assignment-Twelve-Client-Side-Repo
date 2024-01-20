/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import useUsers from "../../../Hooks/useUsers";

const RegisteredRows = ({ participant, i, refetch, isLoading }) => {
  let paid = undefined;
  if( participant.paymentStatus === "paid" ){
    paid = true
  }
  // console.log(paid);
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const [isOrganizer, setOrganizer] = useState(false);
  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);

    if (userRole) {
      if (userRole.role === "Organizer") {
        setOrganizer(true);
      }
    }
  }, [user, users]);
  
  const axiosPublic = useAxiosPublic();
 
  const handleCancel = async () => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to canceled this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, canceled this!",
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await axiosPublic.delete(
          `/participants/${participant._id}`
        );
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Canceled!",
            text: "Participant canceled successfully",
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error canceling camp:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while canceling camp.",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">{participant.camp_name}</td>
        <td className="py-2 px-4 border-b-4">
          {participant.scheduled_date_time}
        </td>
        <td className="py-2 px-4 border-b-4">{participant.venue}</td>
        <td className="py-2 px-4 border-b-4">${participant.camp_fees}</td>
        <td className="py-2 px-4 border-b-4">
          {!isLoading ? (
            <button
              className={`${
                paid || isOrganizer
                  ? "text-gray-500 cursor-not-allowed disabled"
                  : "text-blue-500"
              }`}
            >
              {paid ? (
                <span>Paid</span>
              ) : (
                <Link
                  to={`/participant/payment_camps_registered_camps/${participant._id}`}
                >
                  Pay
                </Link>
              )}
            </button>
          ) : (
            <p className="">
              {" "}
              <Bars
                height="40"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </p>
          )}
        </td>
        <td className="py-2 px-4 border-b-4">
          {!isLoading ? (
            <p>
              {participant.confirmationStatus === "pending" ? (
                <p>Pending</p>
              ) : participant.confirmationStatus === "confirmed" ? (
                <p>Confirmed</p>
              ) : (
                ""
              )}
            </p>
          ) : (
            <p>
              <Bars
                height="40"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </p>
          )}
        </td>
        <td className="py-2 px-4 border-b-4">
          {!isLoading ? (
            <button
              onClick={handleCancel}
              disabled={paid}
              className={`${
                paid
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              } text-white py-1 px-2 rounded`}
            >
              Cancel
            </button>
          ) : (
            <p>
              <Bars
                height="40"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </p>
          )}
        </td>
      </tr>
    </>
  );
};

export default RegisteredRows;
