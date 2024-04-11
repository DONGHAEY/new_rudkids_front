import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

// const requestInterceptors = (config) => {
//   if (config?.headers) {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     config.headers["token"] = token ?? "";
//   }
//   return config;
// };

// axiosInstance.interceptors.request.use(requestInterceptors);

export default axios;
