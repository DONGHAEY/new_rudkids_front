import queryKey from "../queries/key";
import { useQuery } from "react-query";
import { getUser } from "../apis/user/getUser";

export const useUserQuery = () => {
  return useQuery({
    queryKey: [queryKey.user],
    queryFn: getUser,
  });
};
