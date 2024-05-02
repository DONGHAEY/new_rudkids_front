import axiosInstance from "../axiosInstance";

export const editCartProductQuantity = async (productId, quantity = 1) => {
  return await axiosInstance
    .patch(`/api/cart/${productId}/quantity`, {
      quantity,
    })
    .then((response) => response.data);
};
