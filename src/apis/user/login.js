import axiosInstance from "../axiosInstance";
import qs from "qs";

export const instagramLogin = async (searchParams) => {
  return await axiosInstance
    .get(`/api/auth/instagram/callback?${qs.stringify(searchParams)}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((e) => e);
};
