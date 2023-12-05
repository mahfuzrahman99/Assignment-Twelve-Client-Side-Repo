/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/Popular Campus/SectionTitle";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=ba197f9abcf793fc3ed5f7425f357785`;

const UpdateUpcomingCamps = ({ showModal, setShowModal, camp,refetch }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const {
    _id,
    camp_name,
    camp_fees,
    scheduled_date_time,
    venue,
    specialized_service,
    healthcare_professional,
    target_audience,
    description,
    participants,
    paymentStatus,
    confirmationStatus,
    campId,
  } = camp || {};
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.campImage[0] };

    // Upload image to imgbb and get the URL
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        camp_name: data.campName,
        camp_fees: data.campFees,
        scheduled_date_time: data.scheduledDateTime,
        venue: data.venueLocation,
        specialized_service: data.specializedServices,
        healthcare_professional: data.healthcareProfessionals,
        target_audience: data.targetAudience,
        description: data.comprehensiveDescription,
        image: res.data.data.display_url,
        participants: participants,
        paymentStatus: paymentStatus,
        confirmationStatus: confirmationStatus,
        campId: campId,
      };

      const campRes = await axiosSecure.patch(`/upcoming/${_id}`, menuItem);

      if (campRes.data.modifiedCount) {
        refetch()
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.campName} is updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/organizer/manage_upcoming_camps");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update the camp. Please try again.",
        });
      }
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-4xl mx-auto">
            <>
              <Helmet>
                <title>CareCampusPro | Update Upcoming Camps</title>
              </Helmet>
              <SectionTitle
                heading={"Update Upcoming campus"}
                subHeading={"Hurry Up..."}
              />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-center"
              >
                <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
                  <div className="md:grid grid-cols-2 gap-2">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-blue-500 col-span-2">
                      Update Medical Camp
                    </h2>

                    <div className="mb-4 col-span-2">
                      <label className="block text-gray-700">Camp Name:</label>
                      <input
                        className="w-full bg-white p-2 rounded-md mt-1"
                        {...register("campName", {
                          required: "Camp Name is required",
                        })}
                        defaultValue={camp_name}
                      />
                      {errors.campName && (
                        <p className="text-red-500">
                          {errors.campName.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 col-span-1">
                      <label className="block text-gray-700">Camp Fees:</label>
                      <input
                        type="number"
                        {...register("campFees", {
                          required: "Camp Fees is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={camp_fees}
                      />
                      {errors.campFees && (
                        <p className="text-red-500">
                          {errors.campFees.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 col-span-1">
                      <label className="block text-gray-700">Scheduled:</label>
                      <input
                        type="date"
                        {...register("scheduledDateTime", {
                          required: "Scheduled Date and Time is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={scheduled_date_time}
                      />
                      {errors.scheduledDateTime && (
                        <p className="text-red-500">
                          {errors.scheduledDateTime.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 col-span-1">
                      <label className="block text-gray-700">Venue:</label>
                      <input
                        {...register("venueLocation", {
                          required: "Venue Location is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={venue}
                      />
                      {errors.venueLocation && (
                        <p className="text-red-500">
                          {errors.venueLocation.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 col-span-1">
                      <label className="block text-gray-700">
                        Specialized Services:
                      </label>
                      <input
                        {...register("specializedServices", {
                          required: "Specialized Services is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={specialized_service}
                      />
                    </div>

                    <div className="mb-4 col-span-1">
                      <label className="block text-gray-700">
                        Healthcare Professionals:
                      </label>
                      <input
                        {...register("healthcareProfessionals", {
                          required: "Healthcare Professionals is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={healthcare_professional}
                      />
                    </div>

                    <div className="mb-4 col-span-1">
                      <label className="block text-gray-700">
                        Target Audience:
                      </label>
                      <input
                        {...register("targetAudience", {
                          required: "Target Audience is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={target_audience}
                      />
                    </div>

                    <div className="mb-4 col-span-2">
                      <label className="block text-gray-700">
                        Description:
                      </label>
                      <textarea
                        {...register("comprehensiveDescription", {
                          required: "Comprehensive Description is required",
                        })}
                        className="w-full bg-white p-2 rounded-md mt-1"
                        defaultValue={description}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">Image:</label>
                      <input
                        type="file"
                        accept="image/*"
                        {...register("campImage", {
                          required: "Upload Image is required",
                        })}
                      />
                      {errors.campImage && (
                        <p className="text-red-500">
                          {errors.campImage.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/6"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </>
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

export default UpdateUpcomingCamps;
