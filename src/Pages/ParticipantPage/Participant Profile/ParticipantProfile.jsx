import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UpdateParticipantProfile from "./UpdateParticipantProfile";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";
import ParticipantProfileDesign from "./ParticipantProfileDesign";

const ParticipantProfile = () => {
  const { user, updateTheProfile } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>CareCampusPro | Participant Profile</title>
      </Helmet>
      <SectionTitle heading={user?.displayName} />
      <div className="max-w-4xl mx-auto bg-[#6db2da] p-8 rounded-lg shadow-xl">
        <div className="flex justify-around border border-[#6db2da] shadow-lg rounded-md mb-3">
          <ParticipantProfileDesign user={user}/>
        </div>
        <div className="flex justify-end">
          <button onClick={() => setShowModal(true)} className="btn">
            Update Profile
          </button>
          <UpdateParticipantProfile
            updateTheProfile={updateTheProfile}
            user={user}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </>
  );
};

export default ParticipantProfile;
