import axiosInstance from "../axiosInstance";

export const editCartProductAmount = async (productId, productAmount = 1) => {
  return await axiosInstance
    .put(`/api/cart/${productId}/amount`, {
      productAmount,
    })
    .then((response) => response.data);
};
