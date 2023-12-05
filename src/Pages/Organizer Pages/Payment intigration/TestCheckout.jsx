/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const TestCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: participant = [], refetch } = useQuery({
    queryKey: "participant",
    queryFn: async () => {
      const res = await axiosPublic.get(`/participants/${id}`);
      return res.data;
    },
  });
  const {
    camp_name,
    camp_fees,
    confirmationStatus,
    paymentStatus,
    campId,
    venue,
  } = participant || {};
  console.log(participant);
  const options = { timeZone: "Asia/Dhaka" };
  const bdTime = new Date().toLocaleString("en-US", options);

  useEffect(() => {
    if (camp_fees > 0) {
      axiosSecure.post("/create-payment-intent", { camp_fees }).then((res) => {
        refetch()
        setClientSecret(res.data?.clientSecret);
      });
    }
  }, [axiosSecure, camp_fees,refetch]);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError(" ");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    console.log(paymentIntent);
    if (confirmError) {
      console.log("confirm error");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          Status: paymentIntent.status,
          transactionId: paymentIntent.id,
          date: bdTime,
          email: user?.email,
          camp_name,
          camp_fees,
          confirmationStatus,
          paymentStatus: "paid",
          venue,
          campId,
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.insertedId) {
          refetch();
          Swal.fire({
            position: "top",
            icon: "success",
            title: `Yur transaction id is ${paymentIntent.id}`,
            showConfirmButton: false,
            timer: 4000,
          });
          navigate("/participant/payment_history");
        }
        const updatedParticipants = {
          paymentStatus: "paid",
          confirmationStatus: "Confirmed"
        };
        axiosSecure.patch(`/participants/${id}`, updatedParticipants).then((responses) => {
          if (responses.data.modifiedCount) {
            refetch();
          } else {
            // dtrg
          }
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        <div className="my-6 p-4 bg-gray-200 rounded-md">
          <CardElement />
        </div>
        <div className="border border-gray-300 rounded-md p-4 my-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="**** **** **** ****"
          />
        </div>
        <div className="flex justify-between">
          <div className="border border-gray-300 rounded-md p-4 my-4 w-1/2 mr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="border border-gray-300 rounded-md p-4 my-4 w-1/2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="***"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className={`btn ${
              !stripe || !clientSecret ? "cursor-not-allowed" : ""
            } ${
              stripe && clientSecret
                ? "bg-[#6db2da] hover:text-2xl hover:font-bold"
                : ""
            } btn-primary w-1/3 rounded-md my-4`}
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <p className="text-red-600 font-medium">{error}</p>
        {transactionId && (
          <p className="text-green-600 font-medium">
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default TestCheckout;
