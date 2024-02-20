/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Bars } from "react-loader-spinner";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageRegisteredRow = ({ participant, i, refetch, isLoading }) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  let paid = undefined;
  if( participant.paymentStatus === "paid" ){
    paid = true
  }

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

  const handleConfirmedPayment = (id) => {
    const updateInfo = {
      confirmationStatus: "confirmed",
      transactionId: participant.transactionId
    };

    axiosSecure.patch(`/participants/${id}`, updateInfo).then((responses) => {
      console.log(responses.data);
      if (responses.data.modifiedCount) {
        refetch();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update your profile. Please try again.",
        });
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <>
      <tr className="bg-gray-100 text-center">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">{participant.camp_name}</td>
        <td className="py-2 px-4 border-b-4">
          {participant.scheduled_date_time}
        </td>
        <td className="py-2 px-4 border-b-4">{participant.venue}</td>
        <td className="py-2 px-4 border-b-4">${participant.camp_fees}</td>
        <td className="py-2 px-4 border-b-4">
          {!isLoading ? (
            <button>
              {paid ? (
                <Link>
                  <span className="text-gray-500">Paid</span>
                </Link>
              ) : (
                <span className="text-gray-500">Unpaid</span>
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
            <button>
              { paid ? <p>
              {participant.confirmationStatus === "pending" ? (
                <span
                  onClick={() => handleConfirmedPayment(participant._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                >
                  Accept
                </span>
              ) : participant.confirmationStatus === "confirmed" ? (
                <span className="text-blue-500">Confirmed</span>
              ) : (
                ""
              )}
              </p> : <p className="bg-[#9ca3af] text-white py-1 px-2 rounded">Pending</p>}
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
            <span>
              {
                paid ? <button
                onClick={handleCancel}
                className={` ${
                 "bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                }`}
              >
                Cancel
              </button> : <button className="bg-gray-400 text-white py-1 px-2 rounded">Cancel</button>
              }
            </span>
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
