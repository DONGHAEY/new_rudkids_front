import axiosInstance from "../axiosInstance";

export const setMySchool = async (schoolName) => {
  return await axiosInstance
    .put(`/api/user/school/${schoolName}`, null, {
      withCredentials: true,
    })
    .then((response) => response.data);
};
