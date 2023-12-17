/* eslint-disable react/prop-types */

import { PhotoView } from "react-photo-view";
import useUsers from "../../../Hooks/useUsers";

const ProfessionalProfileDesign = ({ user }) => {
  const [users] = useUsers();
  const user1 = users.find((u) => u?.email === user?.email);

  const {
    phoneNumber,
    address,
    nationality,
    dateOfBirth,
    background,
    educationStatus,
    training,
    resume,
    graduation,
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
              <span className="text-lg font-bold">Nationality: </span>
              {nationality}
            </p>
            <p>
              <span className="text-lg font-bold">Date of birth: </span>
              {dateOfBirth}
            </p>
            <p>
              <span className="text-lg font-bold">
                Educational background:{" "}
              </span>
              {background}
            </p>
            <p>
              <span className="text-lg font-bold">Education status: </span>
              {educationStatus}
            </p>
            <p>
              <span className="text-lg font-bold">Expert in: </span>
              {training}
            </p>
            <p>
              <span className="text-lg font-bold">Graduate in: </span>
              {graduation}
            </p>
            <p>
              <span className="text-lg font-bold">Resume link: </span>
              {resume}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfileDesign;
