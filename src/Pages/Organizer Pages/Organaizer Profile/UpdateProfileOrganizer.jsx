/* eslint-disable react/prop-types */

import useUsers from "../../../Hooks/useUsers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateProfileOrganizer = ({ showModal, user, setShowModal }) => {
  const axiosSecure = useAxiosSecure();

  const [users, refetch] = useUsers();
  const user1 = users.find((u) => u?.email === user?.email);

  const {
    name,
    photo,
    phoneNumber,
    address,
    role1,
    organizations,
    duration,
    degrees,
    institutions,
    graduation,
    administration,
    financial,
    leadership,
    compliance,
    EHR,
    Quality,
    contributions,
    personalTouch,
  } = user1 || {};

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.PhotoURL.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const role1 = form.role1.value;
    const organizations = form.organizations.value;
    const duration = form.duration.value;
    const degrees = form.degrees.value;
    const institutions = form.institutions.value;
    const graduation = form.graduation.value;
    const administration = form.administration.value;
    const financial = form.financial.value;
    const leadership = form.leadership.value;
    const compliance = form.compliance.value;
    const EHR = form.EHR.value;
    const Quality = form.Quality.value;
    const contributions = form.contributions.value;
    const personalTouch = form.personalTouch.value;
    const profileInfo = {
      name,
      photo,
      phoneNumber,
      address,
      role1,
      organizations,
      duration,
      degrees,
      institutions,
      graduation,
      administration,
      financial,
      leadership,
      compliance,
      EHR,
      Quality,
      contributions,
      personalTouch,
    };

    axiosSecure.patch(`/users/organizer/${user1._id}`, profileInfo).then((responses) => {
      if (responses.data.modifiedCount) {
        refetch();
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
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-w-3xl mx-auto bg-opacity-80 bg-[#98b7ce]">
            <h1 className="text-2xl font-bold text-center">
              Update Your Profile
            </h1>
            <form
              onSubmit={handleProfileUpdate}
              className="flex mt-4 justify-center"
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
                </div>
                <div className="md:grid grid-cols-2 gap-2">
                  <div>
                    <h1 className="font-semibold">Professional Experience</h1>
                    <div className="space-y-2">
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={role1}
                          name="role1"
                          placeholder="Previous and current roles in medical management"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={organizations}
                          name="organizations"
                          placeholder="Names of organizations worked for"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={duration}
                          name="duration"
                          placeholder="Duration of employment in each campaign"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">Educational Background</h1>
                    <div className="space-y-2">
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={degrees}
                          name="degrees"
                          placeholder="Degrees earned"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="p-3 rounded-md bg-white w-full"
                          defaultValue={institutions}
                          name="institutions"
                          placeholder="Institutions attended"
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
                  <h1 className="font-semibold">Skills</h1>
                  <div className="md:grid grid-cols-2 gap-2 space-y-2 md:space-y-0">
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={administration}
                      name="administration"
                      placeholder="Healthcare administration"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={financial}
                      name="financial"
                      placeholder="Financial management"
                    />
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={leadership}
                      name="leadership"
                      placeholder="Team leadership"
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
                <div className="md:grid grid-cols-2 gap-2">
                  <div>
                    <label>
                      <h1 className="font-semibold">Achievements</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={contributions}
                      name="contributions"
                      placeholder="Notable accomplishments or contributions in the field."
                    />
                  </div>
                  <div>
                    <label>
                      <h1 className="font-semibold">Interests and Hobbies</h1>
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-md bg-white w-full"
                      defaultValue={personalTouch}
                      name="personalTouch"
                      placeholder="Optional but can provide a more personal touch."
                    />
                  </div>
                </div>
                <div className="flex justify-center my-3">
                  <input type="submit" className="md:btn btn-md w-3/4 bg-gray-200 rounded-lg md:w-1/4" value="Update" />
                </div>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button onClick={() => setShowModal(false)} className="btn">
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

export default UpdateProfileOrganizer;
