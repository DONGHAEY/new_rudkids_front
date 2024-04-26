import { useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import { useEffect } from "react";

export const useAxiosInterceptors = () => {
  const navigate = useNavigate();

  const responseHandler = (response) => {
    return response;
  };

  const errorHandler = (error) => {
    const { response } = error;
    if (response?.status === 401) {
      navigate("/list");
    }
  };

  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );

  useEffect(() => {
    axiosInstance.interceptors.response.eject(responseInterceptor);
  }, [responseInterceptor]);
};
