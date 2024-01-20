import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://carecampuspro-server-side.vercel.app",
  // baseURL: "http://localhost:7000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
