import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/Popular Campus/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: feedbackPost = [] } = useQuery({
    queryKey: ["feedbackPost"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedbackPost");
      return res.data;
    },
  });
  return (
    <div className="my-3 md:my-8 max-w-6xl mx-auto">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {feedbackPost.map((feedback) => (
          <SwiperSlide key={feedback._id}>
            <div className="md:grid grid-cols-2 gap-3 items-center  md:my-16 md:w-1/2 mx-auto">
              <div className="col-span-1">
                <img
                  className="h-[220px] md:h-[250px] w-full rounded-lg"
                  src={feedback.image}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#6db2da]">{feedback.name}</h3>
                <h3 className="text-xl font-medium ">{feedback.camp_name}</h3>
                <h3 className="text-2xl ">{feedback.date}</h3>
                <p className="py-3">{feedback.details}</p>
                <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={feedback.rating}
                  readOnly
                />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
