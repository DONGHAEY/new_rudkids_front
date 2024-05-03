import axiosInstance from "../axiosInstance";

export const deleteShippping = async (shippingId) => {
  return await axiosInstance
    .delete(`/api/shipping/${shippingId}`)
    .then((response) => response.data);
};
