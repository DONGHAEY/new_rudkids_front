import axiosInstance from "../axiosInstance";

export const createPayment = async ({ orderId, paymentKey }) => {
  return await axiosInstance
    .post(`/api/payment`, { orderId, paymentKey })
    .then((response) => response.data);
};
