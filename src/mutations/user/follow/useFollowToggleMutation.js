import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../../axiosInstance";
import mutationKey from "../../key";
import queryKey from "../../../queries/key";

export const KEY = [mutationKey.user, "follow", "toggle"];

const toggleFollowUser = (targetUserId) => {
  return axiosInstance
    .post(`/api/user/${targetUserId}/follow/toggle`)
    .then((res) => res.data);
};

const useToggleFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (targetUserId) => {
      await toggleFollowUser(targetUserId);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useToggleFollowMutation;
