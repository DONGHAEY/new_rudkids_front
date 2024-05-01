import axiosInstance from "../axiosInstance";

export const setPhoneNumber = async ({ phoneNumber, authKey }) => {
  return await axiosInstance
    .put(`/api/user/phone_number`, { phoneNumber, authKey })
    .then((response) => response.data);
};
