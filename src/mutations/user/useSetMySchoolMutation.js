import { useMutation } from "react-query";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = ["user", mutationKey.school];

export const setMySchool = async (schoolName) => {
  return await axiosInstance
    .patch(`/api/user/school/${schoolName}`)
    .then((response) => response.data);
};

const useSetMySchoolMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: (schoolName) => setMySchool(schoolName),
  });
};

export default useSetMySchoolMutation;
