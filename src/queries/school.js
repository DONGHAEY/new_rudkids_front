import queryKey from "../queries/key";
import { useQuery } from "react-query";
import { getSchool } from "../apis/school/getSchool";

export const useSchoolQuery = (schoolName) => {
  return useQuery({
    queryKey: [queryKey.school],
    queryFn: () => getSchool(schoolName),
  });
};
