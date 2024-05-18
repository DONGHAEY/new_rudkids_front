import axiosInstance from "../axiosInstance";

export const getMyProfile = async () => {
  return await axiosInstance.get(`/api/profile`).then((res) => res.data);
};
