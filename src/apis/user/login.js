import axiosInstance from "../axiosInstance";
import qs from "qs";

export const instagramLogin = async (searchParams) => {
  return await axiosInstance
    .get(`/auth/instagram/callback?${qs.stringify(searchParams)}`)
    .then((response) => response.data)
    .catch((e) => e);
};
