import { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=ba197f9abcf793fc3ed5f7425f357785`;


/* eslint-disable react/prop-types */
const FeedbackModal = ({ showModal, setShowModal }) => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const { data: campus = [] } = useQuery({
    queryKey: "campus",
    queryFn: async () => {
      const res = await axiosSecure.get(`/campus`);
      console.log(res.data);
      return res.data;
    },
  });

  const formRef = useRef();

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const name = elements.name.value;
    const rating = elements.rating.value;
    const date = elements.date.value;
    const message = elements.message.value;
    const camp_name = elements.camp_name.value;
    const image = elements.photoURL.files[0];
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(image_hosting_api, formData)
      .then((res) => {
        console.log(res.data.data.display_url);
        const feedbackItems = {
          name,
          rating,
          message,
          date,
          camp_name,
          image: res.data.data.display_url,
        };
        axiosSecure.post("/feedbackPost", feedbackItems).then((responses) => {
          if (responses.data.insertedId) {
            formRef.current.reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `Item added to your menu's list`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to add items to the menu's list. Please try again.",
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error uploading image to ImgBB:", error);
      });
  };

  return (
    <div>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-w-2xl bg-[#6db2da] bg-opacity-80">
            <form ref={formRef} onSubmit={handleFeedbackSubmit}>
              <div className="md:grid grid-cols-2 p-3 gap-2">
                <div className="w-full">
                  <label>
                    <h1 className="font-semibold">User Name</h1>
                  </label>
                  <input
                    className="w-full mb-2 p-3 rounded-md"
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="w-full">
                  <label>
                    <h1 className="font-semibold">Upload a photo</h1>
                  </label>
                  <input
                    type="file"
                    className="w-full mb-2 p-3 rounded-md"
                    name="photoURL"
                  />
                </div>
                <div className="w-full">
                  <label>
                    <h1 className="font-semibold">Rating</h1>
                  </label>
                  <input
                    type="text"
                    className="w-full mb-2 p-3 rounded-md"
                    name="rating"
                    placeholder="Must be in 1, 2, 3, 4, 5 rating"
                  />
                </div>
                <div className="w-full">
                  <label>
                    <h1 className="font-semibold">Date</h1>
                  </label>
                  <input
                    type="date"
                    className="w-full mb-2 p-3 rounded-md"
                    name="date"
                  />
                </div>
                <div className="w-full col-span-2">
                  <label>
                    <h1 className=" font-semibold">Category*</h1>
                  </label>
                  <select
                    className="w-full mb-2 p-3 rounded-md"
                    name="camp_name"
                  >
                    {[...new Set(campus.map((item) => item.camp_name))].map(
                      (camp_name) => (
                        <option key={camp_name}>{camp_name}</option>
                      )
                    )}
                  </select>
                </div>
                <div className="w-full  col-span-2">
                  <label>
                    <h1 className="font-semibold">Message</h1>
                  </label>
                  <textarea
                    type="text"
                    className="w-full mb-2 p-3 rounded-md"
                    name="message"
                  />
                </div>
                <div className="flex ">
                  <button className="btn w-1/2">Submit</button>
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
    </div>
  );
};

export default FeedbackModal;
