import axiosInstance from "../axiosInstance";

export const getOrder = async (orderId) => {
  return await axiosInstance
    .get(`/api/order/${orderId}`)
    .then((response) => response.data);
};
