import axiosInstance from "../axiosInstance";

export const getMeUser = async () => {
  return await axiosInstance
    .get("/api/user/my")
    .then((response) => response.data);
};

export const getOtherUser = async (userId) => {
  return await axiosInstance
    .get(`/api/user/${userId}`)
    .then((response) => response.data);
};
