import axiosInstance from "../axiosInstance";

export const editMySocialLinks = async (socialLinks) => {
  return await axiosInstance
    .patch(`/api/profile/social_links`, { socialLinks })
    .then((res) => res.data);
};
