import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

// const requestInterceptors = (config) => {
//   if (config?.headers) {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     config.headers["token"] = token ?? "";
//   }
//   return config;
// };

// axiosInstance.interceptors.request.use(requestInterceptors);

export default axiosInstance;
