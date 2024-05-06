import axiosInstance from "../axiosInstance";

export const createPayment = async ({ orderId, paymentKey, amount }) => {
  console.log(orderId, paymentKey, window.location.href, "siiibal");
  return await axiosInstance
    .post(`/api/payment`, { orderId, paymentKey, amount })
    .then((response) => response.data);
};
