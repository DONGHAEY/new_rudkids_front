import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import { KEY as userKey } from "../../queries/user/useUserQuery";
import mutationKey from "../key";

export const KEY = [mutationKey.user, "instagram", "set"];

const setInstagram = async (profileInfo) => {
  return await axiosInstance
    .patch(`/api/user/instagram`, profileInfo)
    .then((response) => response.data);
};

const useSetInstagramMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (instagramInfo) => {
      await setInstagram(instagramInfo);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(userKey("my"));
    },
  });
};

export default useSetInstagramMutation;
