import axiosInstance from "../axiosInstance";

export const getUser = async () => {
  return await axiosInstance
    .get("/api/auth/getUser")
    .then((response) => response.data);
};
