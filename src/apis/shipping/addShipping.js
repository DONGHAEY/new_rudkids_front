import axiosInstance from "../axiosInstance";

export const addShippping = async ({
  name,
  address,
  detailAddress,
  recieverName,
  recieverPhoneNumber,
}) => {
  return await axiosInstance
    .post(`/api/shipping`, {
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
    })
    .then((response) => response.data);
};
