import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = [queryKey.user, "rank-of-view", "list"];

const getRankOfViewUserList = async () => {
  return await axiosInstance
    .get("/api/user/ranks-of-view")
    .then((res) => res.data);
};

const useRankOfViewUserListQuery = () => {
  return useQuery({
    queryKey: KEY,
    queryFn: getRankOfViewUserList,
  });
};

export default useRankOfViewUserListQuery;
