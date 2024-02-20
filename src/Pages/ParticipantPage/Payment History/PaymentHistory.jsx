import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import PHRow from "./PHRow";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payment = [], } = useQuery({
    queryKey: "payment_intent",
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div  className="max-w-[1120px] mx-auto w-[300px] md:w-auto">
    <Helmet>
      <title>CareCampusPro | Payment History</title>
    </Helmet>
      <div>
        <SectionTitle subHeading={"All Your Payment!"} heading={"PAYMENT HISTORY"} />
      </div>
      <div>
        <div className="bg-white p-4 ">
          <h1 className="text-xl md:text-3xl font-bold">
            Total Payments: {payment.length}
          </h1>
          <div className=" overflow-x-auto overflow-hidden ">
            <table className="min-w-full bg-white table table-md">
              <thead className="rounded-t-xl bg-[#6db2da]">
                <tr className="rounded-t-xl text-white bg-[#6db2da]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">NAME</th>
                  <th className="py-2 px-4 border-b">VENUE</th>
                  <th className="py-2 px-4 border-b">CAMP FEES</th>
                  <th className="py-2 px-4 border-b">CONFIRMATION STATUS</th>
                  <th className="py-2 px-4 border-b">PAYMENT STATUS</th>
                  <th className="py-2 px-4 border-b">DATE</th>
                  <th className="py-2 px-4 border-b">TRANSACTION ID</th>
                </tr>
              </thead>
              <tbody>
                {
                    payment.map((payment,i) => <PHRow key={payment._id} i={i} payment={payment}/>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
