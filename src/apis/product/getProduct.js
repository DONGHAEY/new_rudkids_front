import axiosInstance from "../axiosInstance";

export const getProduct = async (productName) => {
  return await axiosInstance
    .get(`/api/product/${productName}`)
    .then((response) => response.data);
};
