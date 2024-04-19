import axiosInstance from "../axiosInstance";

export const getSchoolUsers = async (schoolName) => {
  return await axiosInstance
    .get(`/api/user/school-users/${schoolName}`)
    .then((response) => response.data);
};
