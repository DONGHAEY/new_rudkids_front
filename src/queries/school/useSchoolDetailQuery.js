import { useQuery } from "react-query";
import queryKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = (school_name) => [queryKey.school, "detail", school_name];

const getSchoolDetail = async (schoolName) => {
  return await axiosInstance
    .get(`/api/school/${schoolName}`)
    .then((response) => response.data);
};

const useSchoolDetailQuery = (schoolName) => {
  return useQuery({
    queryKey: KEY(schoolName),
    queryFn: () => getSchoolDetail(schoolName),
  });
};

export default useSchoolDetailQuery;
