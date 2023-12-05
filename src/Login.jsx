import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import login from "../src/assets/Slider-Doctor/Ragistration-Page-Image.png";
import REGISTRATIONPAGEBG from "../src/assets/Slider-Doctor/RagistrationBgImg.jpg";
import swal from "sweetalert";
import axios from "axios";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "./Provider/AuthProvider";
import SocialLogin from "./Pages/Shared/SocialLogin/SocialLogin";
import useUsers from "./Hooks/useUsers";

const Login = () => {
  const [show, setShow] = useState(true);
  const { user, signInUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const [users] = useUsers();
  // const [isOrganizer] = useOrganizer()
  const [isOrganizer, setOrganizer] = useState(false);
  const [isParticipant, setParticipant] = useState(false);
  const [isProfessional, setProfessional] = useState(false);

  useEffect(() => {
    const userRole = users.find((u) => u?.email === user?.email);
    console.log(userRole?.role);
    //Organizer
    if (userRole) {
      if (userRole.role === "Organizer") {
        setOrganizer(true); //Participant
      } else if (userRole.role === "Participant") {
        setParticipant(true); //Professionals
      } else if (userRole.role === "Professionals") {
        setProfessional(true);
      }
    }
  }, [user, users]);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!disabled) {
      signInUser(email, password)
        .then(() => {
          const user = { email };
          axios
            .post(
              "https://assignment-twelve-server-side-xi.vercel.app/jwt",
              user,
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data) {
                if (isOrganizer) {
                  swal("Success!", "Login Successfully!", "success");
                  navigate("/organizer/organizer_profile");
                } else if (isParticipant) {
                  swal("Success!", "Login Successfully!", "success");
                  navigate("/participant/participant_profile");
                } else if (isProfessional) {
                  swal("Success!", "Login Successfully!", "success");
                  navigate("/professional/professional_profile");
                }
              }
            });
        })
        .catch(() => {
          swal("Error!", "Please check your email and password!", "error");
        });
    } else {
      // Show an error message or toast regarding captcha validation failure
      swal("Error!", "Captcha validation failed!", "error");
    }
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Captcha Matched",
        showConfirmButton: false,
        timer: 1000,
      });
      setDisabled(false);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Captcha Does Not Match",
        showConfirmButton: false,
        timer: 1000,
      });
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${REGISTRATIONPAGEBG})` }}
      >
        <div className="flex justify-center items-center lg:p-12 ">
          <div className="md:grid grid-cols-2 justify-center items-center gap-8 rounded-xl shadow-xl md:mx-28">
            <div className="col-span-1">
              <img
                className=" md:ml-7 h-[350px] w-[550px]"
                src={login}
                alt=""
              />
            </div>
            <div className="">
              <form
                onSubmit={handleLogin}
                className="px-8 py-4 md:py-8 rounded "
              >
                <div className="text-center ">
                  <h1 className="text-2xl  font-bold">Login your account!</h1>
                  <br />
                  <hr className="" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  ">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <div>
                    <label className="label">
                      <span className="label-text w-full">Password</span>
                    </label>
                    <input
                      type={!show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="p-3 rounded-md bg-[#F3F3F3] w-full"
                      required
                    />
                  </div>
                  <div className="absolute top-12 right-2">
                    <span
                      className="text-xl font-extrabold"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                    </span>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Inter Captcha"
                    className="p-3 rounded-md bg-[#F3F3F3]"
                    required
                  />
                  <div>
                    <button
                      onClick={handleValidateCaptcha}
                      className="btn btn-xs btn-outline rounded border-none mt-1 bg-black bg-opacity-10 hover:bg-opacity-30"
                    >
                      Validate
                    </button>
                  </div>
                </div>
                <div className="form-control mt-3">
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn bg-[#427897] uppercase hover:text-black hover:bg-[#427897] rounded-md text-white"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-semibold">
                    Login With...!!
                  </p>
                  <SocialLogin disabled={disabled} />
                </div>
                <p className="text-center mt-2 text-[#706F6F]">
                  Do not have an account? Please
                  <Link className="text-[#F75B5F] font-bold" to="/register">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
