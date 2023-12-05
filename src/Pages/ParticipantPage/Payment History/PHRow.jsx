/* eslint-disable react/prop-types */

const PHRow = ({ i, payment }) => {
  const {
    camp_fees_total,
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
        <td className="py-2 px-4 border-b-4">${camp_fees_total}</td>
        <td className="py-2 px-4 border-b-4">${venue}</td>
        <td className="py-2 px-4 border-b-4">${camp_fees}</td>
        <td className="py-2 px-4 border-b-4">{confirmationStatus}</td>
        <td className={`py-2 px-4 border-b-4`}>{paymentStatus}</td>
        <td className="py-2 px-4 border-b-4">{date}</td>
        <td className="py-2 px-4 border-b-4">{transactionId}</td>
      </tr>
    </>
  );
};

export default PHRow;
