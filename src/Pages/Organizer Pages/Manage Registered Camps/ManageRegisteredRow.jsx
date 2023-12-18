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
import useUsers from "../../../Hooks/useUsers";
import { Bars } from "react-loader-spinner";

const ManageRegisteredRow = ({ participant, i, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  // const [isAdmin] = useAdmin();
  const [isOrganizer, setOrganizer] = useState(false);
  // const [isParticipant, setParticipant] = useState(false);
  // const [isProfessional, setProfessional] = useState(false);
  console.log(isOrganizer);
  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);

    if (userRole) {
      if (userRole.role === "Organizer") {
        setOrganizer(true);
      }
      // else if (userRole.role === "Participant") {
      //   setParticipant(true); //Professionals
      // } else if (userRole.role === "Professionals") {
      //   setProfessional(true);
      // }
    }
  }, [user, users]);
  // console.log(userRole);
  const [paid, setPaid] = useState(false);
  // Use a relevant query to fetch payment status
  const { data: payment_Intent = [], isLoading } = useQuery({
    queryKey: "payment_intent",
    queryFn: async () => {
      // const res = await axiosPublic.get(`/payments/${participant._id}`);
      const res = await axiosPublic.get(`/payments`);
      // console.log(res.data);
      return res.data;
    },
  });
  const paymentObject = useMemo(
    () => ({ ...payment_Intent[0] }),
    [payment_Intent]
  );
  const paymentObject1 = useMemo(
    () => ({ ...payment_Intent[1] }),
    [payment_Intent]
  );
  const paymentObject2 = useMemo(
    () => ({ ...payment_Intent[2] }),
    [payment_Intent]
  );
  const paymentObject3 = useMemo(
    () => ({ ...payment_Intent[3] }),
    [payment_Intent]
  );
  const paymentObject4 = useMemo(
    () => ({ ...payment_Intent[4] }),
    [payment_Intent]
  );
  const paymentObject5 = useMemo(
    () => ({ ...payment_Intent[5] }),
    [payment_Intent]
  );
  const paymentObject6 = useMemo(
    () => ({ ...payment_Intent[0] }),
    [payment_Intent]
  );
  const paymentObject7 = useMemo(
    () => ({ ...payment_Intent[1] }),
    [payment_Intent]
  );
  const paymentObject8 = useMemo(
    () => ({ ...payment_Intent[2] }),
    [payment_Intent]
  );
  const paymentObject9 = useMemo(
    () => ({ ...payment_Intent[3] }),
    [payment_Intent]
  );
  const paymentObject10 = useMemo(
    () => ({ ...payment_Intent[4] }),
    [payment_Intent]
  );

  console.log(paid, paymentObject, payment_Intent);
  useEffect(() => {
    if (
      paymentObject.paymentStatus === "paid" &&
      paymentObject.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject1.paymentStatus === "paid" &&
      paymentObject1.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject2.paymentStatus === "paid" &&
      paymentObject2.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject3.paymentStatus === "paid" &&
      paymentObject3.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject4.paymentStatus === "paid" &&
      paymentObject4.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject5.paymentStatus === "paid" &&
      paymentObject5.campId === participant.campId
    ) {
      setPaid(true);
    }
    if (
      paymentObject6.paymentStatus === "paid" &&
      paymentObject6.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject7.paymentStatus === "paid" &&
      paymentObject7.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject8.paymentStatus === "paid" &&
      paymentObject8.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject9.paymentStatus === "paid" &&
      paymentObject9.campId === participant.campId
    ) {
      setPaid(true);
    } else if (
      paymentObject10.paymentStatus === "paid" &&
      paymentObject10.campId === participant.campId
    ) {
      setPaid(true);
    }
  }, [
    paymentObject,
    paymentObject.campId,
    participant.campId,
    paymentObject1,
    paymentObject2,
    paymentObject3,
    paymentObject4,
    paymentObject5,
    paymentObject6,
    paymentObject7,
    paymentObject8,
    paymentObject9,
    paymentObject10,
    refetch,
  ]);

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
          {!isLoading ? (
            <button
              className={`${paid ? "text-gray-500 disabled" : "text-blue-500"}`}
            >
              {!paid ? (
                <Link
                // to={`/participant/payment_camps_registered_camps/${participant._id}`}
                >
                  {/* {paid || isOrganizer ? "Paid" : "Pay"} */}
                  <span className="text-blue-500">Unpaid</span>
                </Link>
              ) : (
                <span className="text-gray-500">Paid</span>
              )}
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
        <td className="py-2 px-4 border-b-4">
          {!isLoading ? (
            <button
            // className={`${paid || isOrganizer ? "text-gray-500 disabled" : "text-blue-500"}`}
            >
              {!paid ? (
                <Link
                // to={`/participant/payment_camps_registered_camps/${participant._id}`}
                >
                  <span className="text-blue-500">Pending</span>
                  {/* {paid || isOrganizer ? "Confirmed" : "Pending"}  */}
                </Link>
              ) : (
                <span className="text-gray-500">Confirmed</span>
              )}
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
        <td className="py-2 px-4 border-b-4">
          {!isLoading ? (
            <button
              onClick={paid && handleCancel}
              className={` ${
                paid
                  ? "bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                  : "bg-gray-400 text-white py-1 px-2 rounded"
              }`}
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

export default ManageRegisteredRow;
