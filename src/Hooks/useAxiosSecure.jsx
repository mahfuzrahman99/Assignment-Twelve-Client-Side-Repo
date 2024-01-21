// useAxiosSecure.js
import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
const baseURL =
  import.meta.env.MODE == "development"
    ? "http://localhost:7000"
    : import.meta.env.VITE_BASE_URL;
const axiosSecure = axios.create({
  // baseURL: "http://localhost:7000",
  // baseURL: "https://carecampuspro-server-side.vercel.app",
  baseURL: baseURL,
});
console.log(import.meta.env.MODE == "development");
const useAxiosSecure = () => {
  // const navigate = useNavigate();
  // const { logOut } = useContext(AuthContext);

  // axiosSecure.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("access-token");
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (err) => Promise.reject(err)
  // );

  // axiosSecure.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   async (err) => {
  //     const status = err.response?.status;
  //     if (status === 401 || status === 403) {
  //       await logOut();
  //       navigate("/login");
  //     }
  //     return Promise.reject(err);
  //   }
  // );

  return axiosSecure;
};

export default useAxiosSecure;
