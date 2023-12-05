/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";

const UpdateProfessionalProfile = ({ showModal,user, setShowModal }) => {

  const axiosSecure = useAxiosSecure();

  const [users] = useUsers();
  const user1 = users.find((u) => u?.email === user?.email);

  const {
    name,
    photo,
    phoneNumber,
    address,
    nationality,
    dateOfBirth,
    background,
    educationStatus,
    training,
    resume,
    careerHistory,
    graduation,
    goals,
    traits,
    involvement,
    compliance,
    EHR,
    Quality,
  } = user1 || {};

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.PhotoURL.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const nationality = form.nationality.value;
    const dateOfBirth = form.dateOfBirth.value;
    const background = form.background.value;
    const educationStatus = form.educationStatus.value;
    const training = form.training.value;
    const resume = form.resume.value;
    const careerHistory = form.careerHistory.value;
    const graduation = form.graduation.value;
    const goals = form.goals.value;
    const traits = form.traits.value;
    const involvement = form.involvement.value;
    const compliance = form.compliance.value;
    const EHR = form.EHR.value;
    const Quality = form.Quality.value;
    const profileInfo = {
      name,
      photo,
      phoneNumber,
      address,
      nationality,
      dateOfBirth,
      background,
      educationStatus,
      training,
      resume,
      careerHistory,
      graduation,
      goals,
      traits,
      involvement,
      compliance,
      EHR,
      Quality,
    };

    axiosSecure.patch(`/users/professional/${user1._id}`, profileInfo).then((responses) => {
      if (responses.data.modifiedCount) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user?.displayName}...!! your profile is updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update your profile. Please try again.",
        });
      }
    });
    
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal " open>
          <div className="modal-box max-w-2xl bg-opacity-80 h-[80vh] mx-auto bg-[#98b7ce]">
            <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
            <form
              onSubmit={handleProfileUpdate}
              className="flex mt-4 justify-center  p-4"
            >
              <div className="w-full p-4">
                <div className="md:grid grid-cols-2 gap-2">
                  <div>
                    <label>
                      <h1 className="font-semibold">Name</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={name}
                      name="name"
                    />
                  </div>
                  <div>
                    <label>
                      <h1 className="font-semibold">Photo URL</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={photo}
                      name="PhotoURL"
                    />
                  </div>
                  <div>
                    <label>
                      <h1 className="font-semibold">Phone Number</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={phoneNumber}
                      name="phoneNumber"
                    />
                  </div>
                  <div>
                    <label>
                      <h1 className="font-semibold">Address</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={address}
                      name="address"
                    />
                  </div>
                  <div>
                    <label>
                      <h1 className="font-semibold">Nationality</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={nationality}
                      name="nationality"
                      placeholder="Nationality"
                    />
                  </div>
                  <div>
                    <label>
                      <h1 className="font-semibold">Date of birth</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={dateOfBirth}
                      name="dateOfBirth"
                      placeholder="Date of birth"
                    />
                  </div>
                </div>
                <div className="md:grid grid-cols-2 gap-2">
                  <div>
                    <h1 className="font-semibold">Educational Information</h1>
                    <div className="space-y-2">
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={background}
                          name="background"
                          placeholder="Educational background"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={educationStatus}
                          name="educationStatus"
                          placeholder="Current education status"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={training}
                          name="training"
                          placeholder="Specialized training"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Career and Professional History</h1>
                    <div className="space-y-2">
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={resume}
                          name="resume"
                          placeholder="Resume Link"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={careerHistory}
                          name="careerHistory"
                          placeholder="Career history"
                        />
                      </div>
                      <div>
                        <input
                          type="date"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={graduation}
                          name="graduation"
                          placeholder="Graduation dates"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">Goals and Social Background</h1>
                  <div className="md:grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={goals}
                      name="goals"
                      placeholder="Professional goals"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={traits}
                      name="traits"
                      placeholder="Personality traits"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={involvement}
                      name="involvement"
                      placeholder="Social involvement"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={compliance}
                      name="compliance"
                      placeholder="Regulatory compliance"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={EHR}
                      name="EHR"
                      placeholder="Electronic health records (EHR) management"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={Quality}
                      name="Quality"
                      placeholder="Quality improvement"
                    />
                  </div>
                </div>
                <div className="flex justify-center my-3">
                  <input type="submit" className="btn w-1/4" value="Update" />
                </div>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button 
                onClick={() => setShowModal(false)} 
                className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default UpdateProfessionalProfile;
