import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import JoinCampModal from "../../Pages/ParticipantPage/Available Camps Page/JoinCampModal";
import { useContext, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Helmet } from "react-helmet-async";
// import useOrganizer from "../../Hooks/useOrganizer";
import UpdateCamps from "../../Pages/Organizer Pages/Manage Camp/UpdateCamps";
import { AuthContext } from "../../Provider/AuthProvider";
import useUsers from "../../Hooks/useUsers";
import { PhotoView } from "react-photo-view";

const PopularCampDetails = () => {
  // const [isOrganizer] = useOrganizer();
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const [showModal, setShowModal] = useState(false);
  const campus = useLoaderData();
  const [isOrganizer, setOrganizer] = useState(false);
  // const [isParticipant, setParticipant] = useState(false);
  // const [isProfessional, setProfessional] = useState(false);

  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);
    console.log(userRole?.role);
    //Organizer
    if (userRole) {
      if (userRole.role === "Organizer") {
        setOrganizer(true); //Participant
      }
      // else if (userRole.role === "Participant") {
      //   setParticipant(true); //Professionals
      // }
      // else if (userRole.role === "Professionals") {
      //   setProfessional(true);
      // }
    }
  }, [user, users]);

  const {
    image,
    camp_name,
    camp_fees,
    scheduled_date_time,
    specialized_service,
    healthcare_professional,
    venue,
    target_audience,
    description,
  } = campus;

  return (
    <div>
      <Helmet>
        <title>CareCampusPro | Camp Details</title>
      </Helmet>
      <SectionTitle heading={"camp details"} subHeading={"Hurry Up..."} />
      <div className="md:grid grid-cols-2 max-w-6xl mx-auto my-8">
        <div className="col-span-1">
          <PhotoView src={image}>
            <img className="w-full h-full rounded-md" src={image} alt="" />
          </PhotoView>
        </div>
        <div className="p-8 space-y-2">
          <p className=" md:text-xl">
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
            <span className="font-semibold">Service: </span>
            {specialized_service}
          </p>
          <p>
            <span className="font-semibold">Professional: </span>
            {healthcare_professional}
          </p>
          <p>
            <span className="font-semibold">Audience: </span>
            {target_audience}
          </p>
          <p>
            <span className="font-semibold">Description: </span>
            {description}
          </p>
          <div className=" flex justify-end">
            {isOrganizer ? (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  className="md:btn btn-sm bg-gray-200 rounded-lg  uppercase md:w-1/3"
                >
                  <Link>Manage Camp</Link>
                </button>
                <UpdateCamps
                  camp={campus}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </>
            ) : (
              <>
                <button
                  className="md:btn btn-sm bg-gray-200 rounded-lg  uppercase md:w-1/3"
                  onClick={() => setShowModal(true)}
                >
                  Join Camp
                </button>
                <JoinCampModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  camp={campus}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCampDetails;
