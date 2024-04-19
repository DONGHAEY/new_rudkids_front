import axiosInstance from "../axiosInstance";

export const getSchool = async (schoolName) => {
  return await axiosInstance
    .get(`/api/school/${schoolName}`)
    .then((response) => response.data);
};
