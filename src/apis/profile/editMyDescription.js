import axiosInstance from "../axiosInstance";

export const editMyDescription = async (description) => {
  return await axiosInstance
    .patch(`/api/profile/description`, { description })
    .then((res) => res.data);
};
