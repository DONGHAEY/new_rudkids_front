import axiosInstance from "../axiosInstance";

export const getCart = async () => {
  return await axiosInstance.get(`/api/cart`).then((response) => response.data);
};
