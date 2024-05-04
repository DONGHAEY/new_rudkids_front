import axiosInstance from "../axiosInstance";

export const createOrder = async ({ cartId, shipping }) => {
  return await axiosInstance
    .post(`/api/order`, {
      cartId,
      shipping,
    })
    .then((response) => response.data);
};
