/* eslint-disable react/prop-types */
import { PhotoView } from "react-photo-view";
import useUsers from "../../../Hooks/useUsers";

const OrganizerProfileDesign = ({ user }) => {
  const [users] = useUsers();
  const user1 = users.find((u) => u?.email === user?.email);

  const {
    phoneNumber,
    address,
    role,
    organizations,
    duration,
    degrees,
    institutions,
    graduation,
    administration,
  } = user1 || {};

  return (
    <div>
      <div className="">
        <div className="md:grid grid-cols-2">
          <div className="flex justify-center col-span-1">
            <PhotoView src={user?.photoURL}>
              <img className="h-[250px]" src={user?.photoURL} alt="" />
            </PhotoView>
          </div>
          <div className=" p-4 font-medium">
            <p>
              <span className="text-lg font-bold">Phone: </span>
              {phoneNumber}
            </p>
            <p>
              <span className="text-lg font-bold">Address: </span>
              {address}
            </p>
            <p>
              <span className="text-lg font-bold">Role: </span>
              {role}
            </p>
            <p>
              <span className="text-lg font-bold">Organization: </span>
              {organizations}
            </p>
            <p>
              <span className="text-lg font-bold">Duration: </span>
              {duration}
            </p>
            <p>
              <span className="text-lg font-bold">Degrees: </span>
              {degrees}
            </p>
            <p>
              <span className="text-lg font-bold">Institute: </span>
              {institutions}
            </p>
            <p>
              <span className="text-lg font-bold">Graduate in: </span>
              {graduation}
            </p>
            <p>
              <span className="text-lg font-bold">Admission: </span>
              {administration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfileDesign;
