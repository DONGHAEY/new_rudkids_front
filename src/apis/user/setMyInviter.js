import axiosInstance from "../axiosInstance";

export const setMyInviter = async (inviterUserId) => {
  return await axiosInstance
    .patch(`/api/user/inviter/${inviterUserId}`)
    .then((response) => response.data);
};
