import axiosInstance from "../axiosInstance";

export const createPayment = async ({ orderId, paymentKey }) => {
  console.log(orderId, paymentKey, window.location.href, "siiibal");
  return await axiosInstance
    .post(`/api/payment`, { orderId, paymentKey })
    .then((response) => response.data);
};
