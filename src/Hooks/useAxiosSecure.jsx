
import axios from "axios";
// const baseURL =
//   import.meta.env.MODE == "development"
//     ? "http://localhost:7000"
//     : import.meta.env.VITE_BASE_URL;
const axiosSecure = axios.create({
  // baseURL: "http://localhost:7000",
  baseURL: "https://carecampuspro-server-side.vercel.app",
  // baseURL: baseURL,
});
console.log(import.meta.env.MODE == "development");
const useAxiosSecure = () => {

  return axiosSecure;
};

export default useAxiosSecure;
