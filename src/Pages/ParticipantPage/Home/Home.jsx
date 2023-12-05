import { Helmet } from "react-helmet-async";
import PopularSixCampus from "../../../Components/Popular Campus/PopularSixCampus";
import Banner from "./Banner";
import SectionTitle from "../../../Components/Popular Campus/SectionTitle";
import ShowUpcomingCamps from "./Show Upcoming Camps/ShowUpcomingCamps";
import Testimonials from "./Testimonials/Testimonials";
import OrganizationOwner from "../../Organizetion Owner/OrganizationOwner";


const Home = () => {
    return (
        <div>
        <Helmet>
          <title>CareCampusPro | Home</title>
        </Helmet>
            <Banner/>
            <div>
                <PopularSixCampus/>
            </div>
            <div>
                <SectionTitle heading={"Upcoming Camps"} subHeading={"Hurry Up..."}/>
                <ShowUpcomingCamps/>
            </div>
            <div>
                <Testimonials/>
            </div>
            <div>
                <OrganizationOwner/>
            </div>
        </div>
    );
};

export default Home;