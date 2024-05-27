import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (user_id = null) => [queryKey.user, user_id ?? "my"];

const getMeUser = async () => {
  return await axiosInstance
    .get("/api/user/my")
    .then((response) => response.data);
};

const getOtherUser = async (userNickname) => {
  return await axiosInstance
    .get(`/api/user/${userNickname}`)
    .then((response) => response.data);
};

const useUserQuery = (userNickname = null) => {
  return useQuery({
    queryKey: KEY(userNickname),
    queryFn: async () => {
      if (userNickname) {
        return await getOtherUser(userNickname);
      }
      return await getMeUser();
    },
  });
};

export default useUserQuery;
