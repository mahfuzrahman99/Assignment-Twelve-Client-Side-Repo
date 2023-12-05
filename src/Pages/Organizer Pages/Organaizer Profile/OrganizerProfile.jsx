import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UpdateProfileOrganizer from "./UpdateProfileOrganizer";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";
import OrganizerProfileDesign from "./OrganizerProfileDesign";

const OrganizerProfile = () => {
  const { user,updateTheProfile } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  

  return (
    <div className="max-w-4xl mx-auto bg-[#6db2da] md:mt-32 p-8 rounded-lg shadow-xl">
    <Helmet>
      <title>CareCampusPro | User Profile</title>
    </Helmet>
      <SectionTitle heading={user?.displayName}/>
      <OrganizerProfileDesign user={user}/>
      <div className="flex justify-end">
        <button 
        onClick={() => setShowModal(true)} 
        className="btn">
          Update Profile
        </button>
        <UpdateProfileOrganizer
          showModal={showModal}
          updateTheProfile={updateTheProfile}
          user={user}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default OrganizerProfile;
