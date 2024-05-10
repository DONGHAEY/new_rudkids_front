import axiosInstance from "../axiosInstance";

export const setShippingPriceToZero = async () => {
  return await axiosInstance
    .patch(`/api/cart/shipping_price`, {
      data: 0,
    })
    .then((response) => response.data);
};
