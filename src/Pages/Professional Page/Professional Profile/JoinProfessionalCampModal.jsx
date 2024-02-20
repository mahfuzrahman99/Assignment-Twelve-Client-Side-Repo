/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const JoinProfessionalCampModal = ({ showModal, setShowModal, upcomingCamp }) => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  const {
    _id,
    camp_fees,
    interested,
  } = upcomingCamp || {};
  console.log(upcomingCamp);
  const handleJoinCamp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const fees = form.fees.value;
    const contact = form.contact.value;
    const address = form.address.value;
    const specialization = form.specialization.value;
    
    const joiningInfo = {
      name,
      number,
      age,
      gender,
      fees,
      contact,
      address,
      specialization,
      campId: _id,
      interested: interested + 1,
      status: "Pending"
    };
    axiosSecure
      .post("/organizerReview", joiningInfo)
      .then((responses) => {
        if (responses.data.insertedId) {
         form.reset();
          Swal.fire({
            position: "top",
            icon: "success",
            title: `Registration for upcoming camp successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add upcoming camp. Please try again.",
          });
        }
      })
      .catch((error) => {
        console.error("Error your submission not success:", error);
      });
      axiosSecure.put(`/upcomingPut/${_id}`,{interested: interested + 1})

  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-w-5xl mx-auto">
            <form
              onSubmit={handleJoinCamp}
              className="md:grid grid-cols-8 gap-2"
            >
              <div className="form-control col-span-3">
                <label className="label">
                  <span className="label-text  ">Name*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control col-span-3">
                <label className="label">
                  <span className="label-text  ">Emergency Contact*</span>
                </label>
                <input
                  type="number"
                  name="contact"
                  placeholder="Emergency Contact Number"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text  ">Number</span>
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="Your Phone Number"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text  ">Age*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Your Age"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className=" col-span-1">
                <label className="label">
                  <span className="label-text  ">Gender</span>
                </label>
                <select name="gender" className="select select-bordered">
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text  ">Doctors Fee*</span>
                </label>
                <input
                  type="number"
                  name="fees"
                  defaultValue={camp_fees}
                  readOnly
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control col-span-3">
                <label className="label">
                  <span className="label-text  ">Areas of interested in*</span>
                </label>
                <input
                  type="number"
                  name="contact"
                  placeholder="Emergency Contact Number"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>

              <div className="form-control col-span-4">
                <label className="label">
                  <span className="label-text  ">Address*</span>
                </label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>

              <div className="form-control col-span-4">
                <label className="label">
                  <span className="label-text  ">Specialization*</span>
                </label>
                <textarea
                  type="text"
                  name="specialization"
                  placeholder="What is your specialization."
                  className="p-3 rounded-md bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="btn">
                <input type="submit" value="Register" />
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

export default JoinProfessionalCampModal;
