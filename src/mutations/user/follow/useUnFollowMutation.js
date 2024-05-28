import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../../axiosInstance";
import mutationKey from "../../key";
import queryKey from "../../../queries/key";

export const KEY = [mutationKey.user, "unfollow"];

const unFollowUser = (targetNickname) => {
  return axiosInstance
    .delete(`/api/user/${targetNickname}/follow`)
    .then((res) => res.data);
};

const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (targetNickname) => {
      await unFollowUser(targetNickname);
    },
    onSuccess: async (data) => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useUnFollowMutation;
