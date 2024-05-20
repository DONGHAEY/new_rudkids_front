import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (user_id = null) => [queryKey.user, user_id ?? "my"];

const getMeUser = async () => {
  return await axiosInstance
    .get("/api/user/my")
    .then((response) => response.data);
};

const getOtherUser = async (userId) => {
  return await axiosInstance
    .get(`/api/user/${userId}`)
    .then((response) => response.data);
};

const useUserQuery = (userId = null) => {
  return useQuery({
    queryKey: KEY(userId),
    queryFn: () => {
      if (userId) {
        return getOtherUser(userId);
      }
      return getMeUser();
    },
  });
};

export default useUserQuery;
