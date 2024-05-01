import axiosInstance from "../axiosInstance";

export const sendPhoneAuthKey = async ({ phoneNumber }) => {
  return await axiosInstance
    .post(`/api/user/phone_number/send_auth_key`, { phoneNumber })
    .then((response) => response.data);
};
