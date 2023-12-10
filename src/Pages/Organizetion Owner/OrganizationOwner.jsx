import { motion } from "framer-motion";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import SectionTitle from "../../Components/Popular Campus/SectionTitle";

const OrganizationOwner = () => {
  return (
    <div className="max-w-6xl mx-auto">
    <SectionTitle heading={"organization owner"} subHeading={"Hurry Up..."}/>
      <div className="md:grid grid-cols-2 justify-center items-center gap-4 md:p-6">
        <motion.div className="col-span-1">
          <PhotoView src="https://i.ibb.co/wKJ8P4X/model-2911332-1280-1.jpg">
            <img
              src="https://i.ibb.co/wKJ8P4X/model-2911332-1280-1.jpg"
              className="rounded-lg md:h-[350px] w-full"
              alt=""
            />
          </PhotoView>
        </motion.div>
        <div className="col-span-1 text-md p-4 md:text-2xl font-semibold text-gray-500 space-y-3 md:space-y-8">
          <p>
            Hi, my name is Jeffrey, and I’m 23 years of age. I live in The
            Netherlands, as I have for my entire life. I am organizer of your dream
            medical camp management CareCampusPro.
          </p>
          <p>
            A few years back, I finished culinary school and have been working
            in the medical ever since. This is where I found out I would like to help others  .
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-red-400 to-blue-400 font-bold">
            Learn more about me
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizationOwner;
