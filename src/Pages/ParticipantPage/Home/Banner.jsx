import img1 from "../../../assets/Slider-Doctor/download.jpeg";
import img2 from "../../../assets/Slider-Doctor/images (1).jpeg";
import img3 from "../../../assets/Slider-Doctor/images (2).jpeg";
import img4 from "../../../assets/Slider-Doctor/images (2).jpeg";
import img5 from "../../../assets/Slider-Doctor/images (3).jpeg";
import img6 from "../../../assets/Slider-Doctor/images (4).jpeg";
import img7 from "../../../assets/Slider-Doctor/images (5).jpeg";
import img8 from "../../../assets/Slider-Doctor/images (6).jpeg";
import img9 from "../../../assets/Slider-Doctor/images (7).jpeg";
import img10 from "../../../assets/Slider-Doctor/images.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full h-[40vh] md:h-[500px] mb-5 md:mb-16 z-0">
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper z"
      >
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative z-0">
            <img className="h-full w-full object-cover" src={img1} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn p-[2px] md:p-2 btn-outline btn-md hover:bg-[#FF3811] text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img2} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img3} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img4} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img5} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img6} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img7} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img8} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img9} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img9} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[40vh] md:h-[85vh] relative ">
            <img className="h-full w-full object-cover" src={img10} />
            <div className="absolute h-full rounded-xl top-0 bg-opacity-40 flex items-center justify-between bg-gradient-to-r bg-black">
              <div className="space-y-2 md:space-y-6 p-4 md:p-12 md:w-1/2">
                <h1 className="text-lg md:text-5xl font-medium md:font-bold text-white">
                  A Journey to Wellness: The Medical Expos Impact on Health
                </h1>
                <p className="text-xs md:text-lg font-light md:font-normal text-white">
                  In a bustling city, the Medical Expo emerged as a beacon of
                  health, bringing together communities for a day of
                  comprehensive care. From cardiovascular screenings to expert
                  consultations, the expo transformed lives, underscoring the
                  power of proactive healthcare. This success story unfolds as a
                  testament to the positive impact achievable when a community
                  unites for its well-being
                </p>
                <div className="flex items-center gap-5 text-lg font-semibold">
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Discover More
                  </button>
                  <button className="md:btn md:p-2 p-[2px] btn-outline btn-md hover:bg-[#FF3811]  text-white">
                    Latest Camps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
