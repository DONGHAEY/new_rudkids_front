import axiosInstance from "../axiosInstance";

export const setMySchool = async (schoolName) => {
  return await axiosInstance
    .get(`/api/user/school/${schoolName}`)
    .then((response) => response.data);
};
