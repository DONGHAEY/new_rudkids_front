import axiosInstance from "../axiosInstance";

export const getUser = async () => {
  return await axiosInstance
    .get("/api/auth/getUser", {
      withCredentials: true,
    })
    .then((response) => response.data);
};
