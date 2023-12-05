/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { Link } from "react-router-dom";
import UpdateCamps from "./UpdateCamps";

const UsersRow = ({ camp, i, handleDelete }) => {
  const { user: user1 } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr className="bg-gray-100 text-xs">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <img
            className="h-12"
            src={camp?.image || user1?.photoURL}
            alt={camp?.camp_name}
          />
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
          <button
            onClick={() => setShowModal(true)}
            className="flex justify-center m-1 p-1 rounded bg-[#6db2da]"
          >
            <span className="text-4xl">
              <MdOutlineSecurityUpdateGood />
            </span>
          </button>
          <UpdateCamps
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
      </tr>
    </>
  );
};

export default UsersRow;
