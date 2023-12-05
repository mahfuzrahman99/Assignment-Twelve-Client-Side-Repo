import useUpcomingCamps from "../../../../Hooks/useUpcomingCamps";
import UpcomingOneCamp from "./UpcomingOneCamp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const ShowUpcomingCamps = () => {
  const [upcomingCamps] = useUpcomingCamps();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
          loop={true} // Enable infinite loop
          breakpoints={{
            // When window width is >= 992px (lg devices)
            992: {
              slidesPerView: 3,
            },
            // When window width is >= 768px (md devices)
            768: {
              slidesPerView: 3,
            },
            // When window width is < 768px (sm devices)
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {upcomingCamps.map((comingCamp) => (
            <SwiperSlide key={comingCamp._id}>
              <UpcomingOneCamp key={comingCamp._id} camp={comingCamp} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShowUpcomingCamps;
