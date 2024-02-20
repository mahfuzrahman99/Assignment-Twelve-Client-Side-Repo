import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import useOrganizer from "../../../../Hooks/useOrganizer";
import SectionTitle from "../../../../Components/Popular Campus/SectionTitle";
// import UpdateCamps from "../../../Organizer Pages/Manage Camp/UpdateCamps";
import JoinUpcomingCampModal from "./JoinUpcomingCampModal";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useUsers from "../../../../Hooks/useUsers";
import UpdateUpcomingCamp from "./UpdateUpcomingCamp";
import JoinProfessionalCampModal from "../../../Professional Page/Professional Profile/JoinProfessionalCampModal";
import { PhotoView } from "react-photo-view";

const UpcomingCampDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const upcomingCampus = useLoaderData();
  console.log(upcomingCampus)
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const [isOrganizer, setOrganizer] = useState(false);
  const [isParticipant, setParticipant] = useState(false);
  const [isProfessional, setProfessional] = useState(false);

  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);
    console.log(userRole?.role);
    //Organizer
    if (userRole) {
      if (userRole.role === "Organizer") {
        setOrganizer(true); //Participant
      } else if (userRole.role === "Participant") {
        setParticipant(true); //Professionals
      } else if (userRole.role === "Professional") {
        setProfessional(true);
      }
    }
  }, [user, users]);
  console.log(isOrganizer, isParticipant, isProfessional);
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
  } = upcomingCampus;

  return (
    <div>
      <Helmet>
        <title>CareCampusPro | Upcoming Camp Details</title>
      </Helmet>
      <SectionTitle heading={"camp details"} subHeading={"Hurry Up..."} />
      <div className="md:grid grid-cols-2 max-w-6xl mx-auto my-3 md:my-8">
        <div className="col-span-1">
          <PhotoView src={image}>
            <img
              className="w-full h-[250px] md:h-[450px] rounded-md"
              src={image}
              alt=""
            />
          </PhotoView>
        </div>
        <div className="p-8 space-y-2">
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
            <span className="font-semibold">Service: </span>
            {specialized_service}
          </p>
          <p>
            <span className="font-semibold">Professional: </span>
            {healthcare_professional}
          </p>
          <p>
            <span className="font-semibold">Venue: </span>
            {venue}
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
            {isOrganizer && (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  className="md:btn btn-md bg-gray-200 rounded-lg w-2/4 md:w-1/3"
                >
                  <Link>Manage Camp</Link>
                </button>
                <UpdateUpcomingCamp
                  camp={upcomingCampus}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </>
            )}
            {isParticipant && (
              <>
                <button
                  className="md:btn btn-md bg-gray-200 rounded-lg w-2/4 md:w-1/3"
                  onClick={() => setShowModal(true)}
                >
                  Join Camp
                </button>
                <JoinUpcomingCampModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  upcomingCamp={upcomingCampus}
                />
              </>
            )}
            {isProfessional && (
              <>
                <button
                  className="md:btn btn-md bg-gray-200 rounded-lg w-2/4 md:w-1/3"
                  onClick={() => setShowModal(true)}
                >
                  Interested Upcoming
                </button>
                <JoinProfessionalCampModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  upcomingCamp={upcomingCampus}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCampDetails;
