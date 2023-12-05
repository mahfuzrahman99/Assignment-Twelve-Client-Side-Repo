import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import { Helmet } from "react-helmet-async";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=ba197f9abcf793fc3ed5f7425f357785`;
const AddUpcomingCamps = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.campImage[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
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
        participants: 0,
        paymentStatus: "unpaid",
        confirmationStatus: "pending",
      };
      console.log(menuItem);
      const campRes = await axiosSecure.post("/upcoming", menuItem);
      console.log(campRes.data);
      if (campRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.campName} is added to the upcomingCamps list`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className=" mx-auto w-[300px] md:w-auto">
      <Helmet>
        <title>CareCampusPro | Upcoming Camp Form</title>
      </Helmet>
      <SectionTitle heading={"Add a upcoming camp"} subHeading={"Hurry Up..."} />
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center overflow-x-auto">
        <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
          <div className=" md:grid grid-cols-2 gap-2">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-500 col-span-2">
              Add Upcoming Medical Camp
            </h2>

            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Camp Name:</label>
              <input
                className="w-full bg-white p-2 rounded-md mt-1"
                {...register("campName", { required: "Camp Name is required" })}
              />
              {errors.campName && (
                <p className="text-red-500">{errors.campName.message}</p>
              )}
            </div>

            <div className="mb-4 col-span-1">
              <label className="block text-gray-700">Camp Fees:</label>
              <input
                type="number"
                {...register("campFees", { required: "Camp Fees is required" })}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
              {errors.campFees && (
                <p className="text-red-500">{errors.campFees.message}</p>
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
              />
              {errors.venueLocation && (
                <p className="text-red-500">{errors.venueLocation.message}</p>
              )}
            </div>

            <div className="mb-4 col-span-1">
              <label className="block text-gray-700">
                Specialized Services:
              </label>
              <input
                {...register("specializedServices")}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
            </div>

            <div className="mb-4 col-span-1">
              <label className="block text-gray-700">
                Healthcare Professionals:
              </label>
              <input
                {...register("healthcareProfessionals")}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
            </div>

            <div className="mb-4 col-span-1">
              <label className="block text-gray-700">Target Audience:</label>
              <input
                {...register("targetAudience")}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
            </div>

            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Description:</label>
              <textarea
                {...register("comprehensiveDescription")}
                className="w-full bg-white p-2 rounded-md mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Image:</label>
              <input
                type="file"
                accept="image/*"
                {...register("campImage", {
                  required: "Camp Image is required",
                })}
              />
              {errors.campImage && (
                <p className="text-red-500">{errors.campImage.message}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/6"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUpcomingCamps;
