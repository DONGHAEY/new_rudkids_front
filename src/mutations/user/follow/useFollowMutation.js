import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../../axiosInstance";
import mutationKey from "../../key";
import queryKey from "../../../queries/key";

export const KEY = [mutationKey.user, "follow"];

const followUser = (targetUserId) => {
  return axiosInstance
    .post(`/api/user/${targetUserId}/follow`)
    .then((res) => res.data);
};

const useFollowMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (targetUserId) => {
      await followUser(targetUserId);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useFollowMutation;
