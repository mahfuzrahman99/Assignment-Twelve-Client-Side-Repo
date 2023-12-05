/* eslint-disable react/prop-types */
// components/RegisteredRows.js
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";

const ManageRegisteredRow = ({ participant, i, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext)
  const [paid, setPaid] = useState(false)
  // Use a relevant query to fetch payment status
  const { data: payment_Intent = [], } = useQuery({
    queryKey: "payment_intent",
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  // Use useMemo to memoize paymentObject
  const paymentObject = useMemo(() => ({ ...payment_Intent[0] }), [
    payment_Intent,
  ]);

  // useEffect(()=>{
  //   if(paymentObject.paymentStatus === "paid"){
  //     setPaid(true)
  //   }
  // },[paymentObject])

  useEffect(() => {
    // useEffect er vitore shudhu ekbar re-render korar pore ei block ta execute hobe
    if (paymentObject.campId === participant.campId) {
      refetch()
      setPaid(true);
    }
  }, [paymentObject.campId, participant.campId, refetch,]);
    console.log( participant);

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
        <td className="py-2 px-4 border-b-4">{participant.camp_fees}</td>
        <td className="py-2 px-4 border-b-4">
          <button
            className={`${paid ? "text-gray-500 disabled" : "text-blue-500"}`}
          >
            <Link to={`/participant/payment_camps_registered_camps/${participant._id}`}>
             {paid ? "Paid" : "Pay"}
            </Link>
          </button>
        </td>
        <td className="py-2 px-4 border-b-4">
          <button
            className={`${paid ? "text-gray-500 disabled" : "text-blue-500"}`}
          >
            <Link to={`/participant/payment_camps_registered_camps/${participant._id}`}>
              {paid ? "Confirmed" : "Pending"} 
            </Link>
          </button>
        </td>
        <td className="py-2 px-4 border-b-4">
          { (
            <button
              onClick={handleCancel}
              className={` bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded`}
            >
              Cancel
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default ManageRegisteredRow;
