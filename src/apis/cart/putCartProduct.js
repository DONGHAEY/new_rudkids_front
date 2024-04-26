import axiosInstance from "../axiosInstance";

export const putCartProduct = async (productId) => {
  return await axiosInstance
    .put(`/api/cart`, {
      productId,
    })
    .then((response) => response.data);
};
