import axiosInstance from "../axiosInstance";

export const setMySchool = async (schoolName) => {
  return await axiosInstance
    .patch(`/api/user/school/${schoolName}`)
    .then((response) => response.data);
};
