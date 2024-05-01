import axiosInstance from "../axiosInstance";

export const createOrder = async ({ cartId }) => {
  return await axiosInstance
    .post(`/api/order`, {
      cartId: cartId,
    })
    .then((response) => response.data);
};
