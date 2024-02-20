import axios from "axios";
// export const baseURL =
//   import.meta.env.MODE == "development"
//     ? "http://localhost:7000"
//     : import.meta.env.VITE_BASE_URL;
export const axiosPublic = axios.create({
  // baseURL: baseURL,
  // baseURL: "https://assignment-twelve-server-side-iota.vercel.app",
  baseURL: "http://localhost:7000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
