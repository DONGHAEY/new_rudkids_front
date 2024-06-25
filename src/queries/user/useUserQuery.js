import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (userId = null) => [queryKey.user, userId ?? "my"];

export const getMeUser = async () => {
  return await axiosInstance
    .get("/api/user/my")
    .then((response) => response.data);
};

export const getOtherUser = async (userId) => {
  return await axiosInstance
    .get(`/api/user/${userId}`)
    .then((response) => response.data);
};

const useUserQuery = (userId = null, isOptional = false) => {
  return useQuery({
    queryKey: KEY(userId),
    queryFn: async () => {
      try {
        if (userId) {
          return await getOtherUser(userId);
        }
        return await getMeUser();
      } catch (e) {
        if (isOptional) {
          return null;
        } else {
          throw e;
        }
      }
    },
  });
};

export default useUserQuery;
