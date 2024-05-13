import axiosInstance from "../axiosInstance";

export const editOrderShipping = async ({ orderId, shipping }) => {
  return await axiosInstance
    .patch(`/api/order/${orderId}/shipping`, shipping)
    .then((response) => response.data);
};
