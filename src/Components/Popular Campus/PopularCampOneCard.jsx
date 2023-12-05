/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
// import useJoinCamp from "../../Hooks/useJoinCamp";
import useCampus from "../../Hooks/useCampus";

const PopularCampOneCard = ({ camp }) => {
  console.log(camp);
  const [campus] = useCampus();
  const {
    _id,
    image,
    camp_name,
    camp_fees,
    scheduled_date_time,
    venue,
    target_audience,
    specialized_service,
    healthcare_professional,
  } = camp || {};

  const campus1 = campus.filter((cam) => cam._id === _id);
  const campData = { ...campus1[0] };

  console.log(campData.participants);
  return (
    <div>
      <div className="md:grid grid-cols-2 mx-2 md:mx-auto bg-[#6db2da] p-4 rounded-lg text-[#0F1E1E] h-[510px] md:h-[410px]">
        <div className="col-span-1">
          <img className="h-[150px] w-full rounded-lg" src={image} alt="" />
        </div>
        <div className="col-span-1 p-2">
          <p>
            <span className="font-semibold">Fees:</span> ${camp_fees}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {scheduled_date_time}
          </p>
          <p>
            <span className="font-semibold">Venue:</span> {venue}
          </p>
          <p>
            <span className="font-semibold"></span> {target_audience}
          </p>
        </div>
        <h1 className="col-span-2">
          <span className="font-semibold">Camp Name:</span> {camp_name}
        </h1>
        <div className="col-span-2 flex justify-between p-2">
          <div>
            <span className="font-semibold">
              Services: {specialized_service}
            </span>
          </div>
          <div>
            <span className="font-semibold">
              Professionalists: {healthcare_professional}
            </span>
          </div>
        </div>
        <div className="col-span-2 flex justify-between">
          <div>
            <p className="md:text-xl font-semibold p-2 ">
              Participant: {campData.participants}{" "}
            </p>
          </div>
          <div>
            <Link to={`/camp_details/${_id}`}>
              <button className="md:btn btn-sm bg-white rounded-lg  uppercase">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCampOneCard;
