import { createBrowserRouter } from "react-router-dom";
import ParticipantUser from "../Layouts/ParticipantUser";
import Home from "../Pages/ParticipantPage/Home/Home";
import Register from "../Pages/Shared/Register";
import PopularCampDetails from "../Components/Popular Campus/PopularCampDetails";
import Login from "../Login";
import AvailableCamps from "../Pages/ParticipantPage/Available Camps Page/AvailableCamps";
import OrganizerUser from "../Layouts/OrganizerUser";
import AddCampForm from "../Pages/Organizer Pages/Add a Camp/AddCampForm";
import ManageCamp from "../Pages/Organizer Pages/Manage Camp/ManageCamp";
import UpdateCamps from "../Pages/Organizer Pages/Manage Camp/UpdateCamps";
import AllUsers from "../Pages/Organizer Pages/AllUsers/AllUsers";
import ParticipantDashboard from "../Layouts/ParticipantDashboard";
import ParticipantProfile from "../Pages/ParticipantPage/Participant Profile/ParticipantProfile";
import OrganizerProfile from "../Pages/Organizer Pages/Organaizer Profile/OrganizerProfile";
import Payment from "../Pages/Organizer Pages/Payment intigration/Payment";
import ManageRegisteredParticipantCamps from "../Pages/ParticipantPage/ManageRegisteredCampsParticipant/ManageRegisteredParticipantCamps";
import PaymentHistory from "../Pages/ParticipantPage/Payment History/PaymentHistory";
import AddUpcomingCamps from "../Pages/Organizer Pages/Add Upcomming Camps/AddUpcomingCamps";
import UpcomingCampDetails from "../Pages/ParticipantPage/Home/Show Upcoming Camps/UpcomingCampDetails";
import ManageRegisteredOrganizerCamp from "../Pages/Organizer Pages/Manage Registered Camps/ManageRegisteredOrganizerCamp";
import FeedbackAndRatings from "../Pages/ParticipantPage/Feedback and Ratings/FeedbackAndRatings";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProfessionalsDashboard from "../Layouts/ProfessionalsDashboard";
import ProfessionalProfile from "../Pages/Professional Page/Professional Profile/ProfessionalProfile";
import PrivetRout from "./PrivetRout";
import ManageUpcomingCamp from "../Pages/ParticipantPage/Home/Show Upcoming Camps/ManageUpcomingCamp";
import Contact_Us from "../Pages/ContactUs/Contact_Us";
// import { axiosPublic } from "../Hooks/useAxiosPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParticipantUser />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contactUs",
        element: <Contact_Us />,
      },
      {
        path: "/camp_details/:campId",
        element: <PrivetRout><PopularCampDetails /></PrivetRout>,
        loader: ({ params }) =>
          fetch(
            `https://carecampuspro-server-side.vercel.app/campus/${params.campId}`
            // `http://localhost:7000/campus/${params.campId}`
            // `${axiosPublic}/campus/${params.campId}`
          ),
      },
      {
        path: "/upcoming_camp_details/:campId",
        element: <PrivetRout><UpcomingCampDetails /></PrivetRout>,
        loader: ({ params }) =>
          fetch(
            `https://carecampuspro-server-side.vercel.app/upcoming/${params.campId}`
            // `http://localhost:7000/upcoming/${params.campId}`
            // `${axiosPublic}/upcoming/${params.campId}`
          ),
      },
      {
        path: "/availableCamps",
        element: <PrivetRout><AvailableCamps /></PrivetRout>,
      },
    ],
  },
  {
    path: "organizer",
    element: <PrivetRout><OrganizerUser /></PrivetRout>,
    children: [
      {
        path: "add_a_camp",
        element: <AddCampForm />,
      },
      {
        path: "manage_camps",
        element: <ManageCamp />,
      },
      {
        path:"manage_upcoming_camps",
        element:<ManageUpcomingCamp/>,
      },
      {
        path: "update_camps/:campId",
        element: <UpdateCamps />,
        loader: ({ params }) =>
          fetch(
            `https://carecampuspro-server-side.vercel.app/campus/${params.campId}`
            // `http://localhost:7000/upcoming/${params.campId}`
            // `${axiosPublic}/campus/${params.campId}`
          ),
      },
      {
        path: "organizer_profile",
        element: <OrganizerProfile />,
      },
      {
        path: "manage_registered_camps",
        element: <ManageRegisteredOrganizerCamp />,
      },
      {
        path: "all_users",
        element: <AllUsers />,
      },
      {
        path: "add_upcoming_camp",
        element: <AddUpcomingCamps />,
      },
    ],
  },
  {
    path:"professional",
    element:<PrivetRout><ProfessionalsDashboard/></PrivetRout>,
    children:[
      {
        path:"professional_profile",
        element:<ProfessionalProfile/>
      },
    ]
  },
  {
    path: "participant",
    element: <PrivetRout><ParticipantDashboard /></PrivetRout>,
    children: [
      {
        path: "participant_profile",
        element: <ParticipantProfile />,
      },
      {
        path: "manage_camps_registered_camps",
        element: <ManageRegisteredParticipantCamps />,
      },
      {
        path: `payment_camps_registered_camps/:id`,
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://carecampuspro-server-side.vercel.app/payments/${params.id}`
            // `http://localhost:7000/upcoming/${params.campId}`
            // `${axiosPublic}/payments/${params.id}`
          ),
      },
      {
        path: "payment_history",
        element: <PaymentHistory />,
      },
      {
        path:"feedback_and_ratings",
        element:<FeedbackAndRatings/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
