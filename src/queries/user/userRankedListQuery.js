import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = [queryKey.user, "rank", "list"];

const getRankedUserList = async () => {
  return await axiosInstance.get("/api/user/rank").then((res) => res.data);
};

const useRankedListQuery = () => {
  return useQuery({
    queryKey: KEY,
    queryFn: getRankedUserList,
  });
};

export default useRankedListQuery;
