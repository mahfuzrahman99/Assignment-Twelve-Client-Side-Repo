/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UpcomingOneCamp = ({ camp }) => {
  const {
    _id,
    camp_name,
    camp_fees,
    scheduled_date_time,
    venue,
    specialized_service,
    healthcare_professional,
    target_audience,
    description,
    image,
  } = camp || {};

  return (
    <div>
      <div className="mb-4 font-semibold bg-[#54b9f4] rounded-lg relative">
        <div className="h-[450px] card shadow-xl">
          <figure>
            <img src={image} alt="Cars" className="h-[220px] w-full" />
          </figure>
          <div className="card-body p-4">
            <div className="">
              <h2 className="text-lg">
                Camp Name:{" "}
                <span className="text-[#1e303b] font-bold">
                  {camp_name}
                </span>
              </h2>
              <h2 className="">
                Schedule:{" "}
                <span className="">
                  {scheduled_date_time}
                </span>
              </h2>
              <p>
                <span className=" font-semibold">Venue: </span>
                {venue}
              </p>
              <p>
                <span className=" font-semibold">Audience: </span>
                {target_audience}
              </p>
              <p>
                <span className=" font-semibold">Audience: </span>
                {specialized_service}
              </p>
              <p>
                <span className=" font-semibold">Audience: </span>
                {healthcare_professional}
              </p>
            </div>
            <div className="flex justify-end">
                <Link to={`/upcoming_camp_details/${_id}`}><button className="btn btn-sm">View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOneCamp;
