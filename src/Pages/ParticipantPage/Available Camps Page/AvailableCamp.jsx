/* eslint-disable react/prop-types */

// import { useState } from "react";
// import JoinCampModal from "./JoinCampModal";
import { Link } from "react-router-dom";

const AvailableCamp = ({ camp }) => {
  //   const [showModal, setShowModal] = useState(false);

  const {
    _id,
    image,
    camp_name,
    camp_fees,
    scheduled_date_time,
    venue,
    target_audience,
    description,
    participants,
  } = camp;
console.log(camp);
  return (
    <div>
      <div className="md:grid grid-cols-2 justify-between rounded-lg shadow-lg gap-4 p-4 bg-[#6db2da] text-[#0F1E1E] md:h-[480px]">
        <div className="col-span-1">
          <img className="md:h-[200px] h-[170px] w-full rounded-md" src={image} alt="" />
        </div>
        <div className="col-span-1">
          <p className="text-xl">
            <span className="font-semibold">Campus Name: </span>
            {camp_name}
          </p>
          <p>
            <span className="font-semibold">Doctors Fee: $</span>
            {camp_fees}
          </p>
          <p>
            <span className="font-semibold">Examination Time: </span>
            {scheduled_date_time}
          </p>
          <p>
            <span className="font-semibold">Venue: </span>
            {venue}
          </p>
          <p>
            <span className="font-semibold">Audience: </span>
            {target_audience}
          </p>
        </div>
        <div className="col-span-2">
          <p>
            <span className="font-semibold">Description: </span>
            {description}
          </p>
          <div className=" flex justify-between">
            <div>
              <p className="text-xl font-semibold p-2 ">
                Participant: {participants}{" "}
              </p>
            </div>
            <Link to={`/camp_details/${_id}`}>
              <button className="btn ">Camp Details</button>
            </Link>
            {/* <JoinCampModal
              showModal={showModal}
              setShowModal={setShowModal}
              camp={camp}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCamp;
