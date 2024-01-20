/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
// import useJoinCamp from "../../Hooks/useJoinCamp";
import useCampus from "../../Hooks/useCampus";
import { PhotoView } from "react-photo-view";

const PopularOneCampCard = ({ camp }) => {
  // console.log(camp);
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

  // console.log(campData.participants);
  return (
    <div>
      <div className="md:grid grid-cols-2 flex flex-col justify-between mx-2 md:mx-auto bg-white shadow-lg p-4 rounded-lg text-[#0F1E1E] md:h-[530px]">
        <div className="col-span-2">
          <PhotoView src={image}>
            <img className="h-[250px] w-full rounded-lg" src={image} alt="" />
          </PhotoView>
        </div>
        <h1 className="col-span-2 mt-2">
          <span className="font-semibold">Camp Name:</span> {camp_name}
        </h1>
        <div className="col-span-1 p-2">
          <p>
            <span className="font-semibold">Fees:</span> ${camp_fees}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {scheduled_date_time}
          </p>
          <p>
            <span className="font-semibold">Audience: </span> {target_audience}
          </p>
        </div>
        <div className="col-span-1 p-2">
          <div>
            <span className="font-semibold">Services:</span>
            {specialized_service}
          </div>
          <div>
            <span className="font-semibold">Professionalists:</span>
            {healthcare_professional}
          </div>
          <p>
            <span className="font-semibold">Venue:</span> {venue}
          </p>
        </div>
        <div className="col-span-2 flex justify-between">
          <div>
            <p className="md:text-xl font-semibold p-2 ">
              Participant: {campData.participants}{" "}
            </p>
          </div>
          <div>
            <Link to={`/camp_details/${_id}`}>
              <button className="md:btn btn-sm bg-white rounded-lg  uppercase">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularOneCampCard;
