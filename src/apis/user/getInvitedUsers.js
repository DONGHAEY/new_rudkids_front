import axiosInstance from "../axiosInstance";

export const getInvitedUsers = async (inviterUserId) => {
  return await axiosInstance
    .get(`/api/user/invited-users/${inviterUserId}`)
    .then((response) => response.data);
};
