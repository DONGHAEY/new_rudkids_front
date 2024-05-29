import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../../axiosInstance";
import mutationKey from "../../key";
import queryKey from "../../../queries/key";

export const KEY = [mutationKey.user, "unfollow"];

const unFollowUser = (targetUserId) => {
  return axiosInstance
    .delete(`/api/user/${targetUserId}/follow`)
    .then((res) => res.data);
};

const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (targetUserId) => {
      await unFollowUser(targetUserId);
    },
    onSuccess: async (data) => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useUnFollowMutation;
