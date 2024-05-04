import axiosInstance from "../axiosInstance";

export const editShippping = async (
  shippingId,
  { name, address, detailAddress, recieverName, recieverPhoneNumber, isDefault }
) => {
  return await axiosInstance
    .put(`/api/shipping/${shippingId}`, {
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      isDefault,
    })
    .then((response) => response.data);
};
