import axiosInstance from "../axiosInstance";

export const getProfile = async (profileName) => {
  return await axiosInstance
    .get(`/api/profile/${profileName}`)
    .then((res) => res.data);
};
