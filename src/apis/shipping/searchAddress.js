import axios from "axios";
import axiosInstance from "../axiosInstance";

export const searchAddress = async (query) => {
  return axiosInstance
    .get(`/api/shipping/searchAddress?query=${query}`)
    .then((res) => res.data);
};
