import axiosInstance from "../axiosInstance";

export const addShippping = async ({
  name,
  address,
  detailAddress,
  recieverName,
  recieverPhoneNumber,
  isDefault,
}) => {
  return await axiosInstance
    .post(`/api/shipping`, {
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      isDefault,
    })
    .then((response) => response.data);
};
