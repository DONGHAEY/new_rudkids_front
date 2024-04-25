import axiosInstance from "../axiosInstance";

export const getCartCnt = async () => {
  return await axiosInstance
    .get(`/api/cart/cnt`)
    .then((response) => response.data);
};
