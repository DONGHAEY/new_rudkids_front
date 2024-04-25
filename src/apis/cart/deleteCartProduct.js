import axiosInstance from "../axiosInstance";

export const deleteCartProduct = async (productId) => {
  return await axiosInstance
    .delete(`/api/cart/${productId}`)
    .then((response) => response.data);
};
