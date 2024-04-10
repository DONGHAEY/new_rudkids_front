import axios from "axios";
import axiosInstance from "../axiosInstance";
import qs from "qs";

export const instagramLogin = async (searchParams) => {
  console.log("asdfasdfasdf", process.env.REACT_APP_SERVER_URL);
  return await axios
    .get(
      `${
        process.env.REACT_APP_SERVER_URL
      }/auth/instagram/callback?${qs.stringify(searchParams)}`
    )
    .then((response) => response.data)
    .catch((e) => e);
  return await axiosInstance
    .get(`/auth/instagram/callback?${qs.stringify(searchParams)}`)
    .then((response) => response.data)
    .catch((e) => e);
};
