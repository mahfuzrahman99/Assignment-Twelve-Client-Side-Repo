import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import ProfessionalProfileDesign from "./ProfessionalProfileDesign";
import UpdateProfessionalProfile from "./UpdateProfessionalProfile";

const ProfessionalProfile = () => {
  const { user, updateTheProfile } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>CareCampusPro | Professionals Profile</title>
      </Helmet>
      <SectionTitle heading={user?.displayName} />
      <div className="max-w-4xl mx-auto bg-[#6db2da] p-8 rounded-lg shadow-xl">
        <div className="flex justify-around border border-[#6db2da] shadow-lg rounded-md mb-3">
          <ProfessionalProfileDesign user={user}/>
        </div>
        <div className="flex justify-end">
          <button onClick={() => setShowModal(true)} className="btn">
            Update Profile
          </button>
          <UpdateProfessionalProfile
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

export default ProfessionalProfile;
