import axios from "axios";

const axiosInstance = axios;

axiosInstance.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default axiosInstance;
