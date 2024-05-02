import axiosInstance from "../axiosInstance";

export const addCartProduct = async (productId) => {
  return await axiosInstance
    .post(`/api/cart`, {
      productId,
    })
    .then((response) => response.data);
};
