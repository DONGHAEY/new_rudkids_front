import axiosInstance from "../axiosInstance";

export const editCartProductQuantity = async (productId, quantity = 1) => {
  return await axiosInstance
    .put(`/api/cart/${productId}/amount`, {
      quantity,
    })
    .then((response) => response.data);
};
