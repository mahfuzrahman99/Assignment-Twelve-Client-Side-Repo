/* eslint-disable no-unused-vars */

import { PhotoView } from "react-photo-view";
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
      <div className="mb-4 bg-[#54b9f4] rounded-lg relative">
        <div className="h-[480px] card shadow-xl">
          <figure>
            <PhotoView src={image}>
              <img src={image} alt="Cars" className="h-[180px] w-full" />
            </PhotoView>
          </figure>
          <div className="card-body p-4 flex flex-col justify-between">
            <div className="">
              <h2 className="text-lg">
                <span className="text-[#1e303b] font-semibold">
                  Camp Name:{" "}
                </span>
                {camp_name}
              </h2>
              <h2 className="">
                <span className="font-semibold">Schedule:</span>
                {scheduled_date_time}
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
                <span className=" font-semibold">Service: </span>
                {specialized_service}
              </p>
              <p>
                <span className=" font-semibold">Professional: </span>
                {healthcare_professional}
              </p>
            </div>
            <div className="flex justify-end">
              <Link to={`/upcoming_camp_details/${_id}`}>
                <button className="btn btn-sm">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOneCamp;
