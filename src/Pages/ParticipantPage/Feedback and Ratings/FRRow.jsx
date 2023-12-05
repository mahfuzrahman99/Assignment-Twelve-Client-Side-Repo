/* eslint-disable react/prop-types */

import { useState } from "react";
import FeedbackModal from "./FeedbackModal";

const FRRow = ({ i, payment }) => {

    const [showModal, setShowModal] = useState(false);

  const {
    transactionId,
    date,
    camp_name,
    venue,
    camp_fees,
    confirmationStatus,
    paymentStatus,
  } = payment || {};
  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">{camp_name}</td>
        <td className="py-2 px-4 border-b-4">${venue}</td>
        <td className="py-2 px-4 border-b-4">${camp_fees}</td>
        <td className="py-2 px-4 border-b-4">{confirmationStatus}</td>
        <td className={`py-2 px-4 border-b-4`}>{paymentStatus}</td>
        <td className={`py-2 px-4 border-b-4`}>
          <button
            className="btn bg-[#6db2da] text-white hover:text-black"
            onClick={()=>setShowModal(true)}
          >
            FEEDBACK
          </button>
          <FeedbackModal payment={payment} showModal={showModal} setShowModal={setShowModal}/>
        </td>
        <td className="py-2 px-4 border-b-4">{date}</td>
        <td className="py-2 px-4 border-b-4">{transactionId}</td>
      </tr>
    </>
  );
};

export default FRRow;
