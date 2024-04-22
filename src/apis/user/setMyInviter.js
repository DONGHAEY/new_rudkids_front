import axiosInstance from "../axiosInstance";

export const setMyInviter = async (inviterUserId) => {
  return await axiosInstance
    .put(`/api/user/inviter/${inviterUserId}`, null, {
      withCredentials: true,
    })
    .then((response) => response.data);
};
