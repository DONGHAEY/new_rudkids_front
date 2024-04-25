import axiosInstance from "../axiosInstance";

export const getProductList = async () => {
  return await axiosInstance
    .get(`/api/product`)
    .then((response) => response.data);
};
