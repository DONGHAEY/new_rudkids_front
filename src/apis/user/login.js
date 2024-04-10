import axiosInstance from "../axiosInstance";
import qs from "qs";

export const instagramLogin = async (searchParams) => {
  console.log("asdfasdfasdf", process.env.REACT_APP_SERVER_URL);
  return await axiosInstance
    .get(`/api/auth/instagram/callback?${qs.stringify(searchParams)}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => e);
};
