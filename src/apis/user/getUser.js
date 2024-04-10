import axiosInstance from "../axiosInstance";

export const getUser = async () => {
  return await axiosInstance
    .get("/auth/getUser")
    .then((response) => response.data);
};
