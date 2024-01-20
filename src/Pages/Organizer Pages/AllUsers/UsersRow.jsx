/* eslint-disable react/prop-types */
import { MdSecurityUpdateGood } from "react-icons/md";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { PhotoView } from "react-photo-view";

const UsersRow = ({ user, i, handleRemove, handleUpdateUserRole }) => {
  const { user: user1 } = useContext(AuthContext);
  // console.log(user.role);
  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={user.photoURL || user1.photoURL}>
            <img
              className="h-6"
              src={user.photoURL || user1.photoURL}
              alt={user.name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{user.name}</td>
        <td className="py-2 px-4 border-b-4">{user.email}</td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <p className="text-lg">{user.role}</p>
        </td>
        <td className="py-2 px-4 border-b-4">
          <button
            onClick={() => handleUpdateUserRole(user._id, user)}
            className="bg-[#47b2f1] text-3xl text-white p-2 rounded"
          >
            <MdSecurityUpdateGood />
          </button>
        </td>
        <td className="py-2 px-4 border-b-4">
          {
            <button
              onClick={() => handleRemove(user._id, user)}
              className="bg-red-500 text-white text-3xl p-2 rounded ml-2"
            >
              <IoPersonRemoveOutline />
            </button>
          }
        </td>
      </tr>
    </>
  );
};

export default UsersRow;
