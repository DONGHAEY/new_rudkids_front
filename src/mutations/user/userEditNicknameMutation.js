import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import queryKey from "../../queries/key";

export const KEY = [mutationKey.user, "nickname", "edit"];

const editNickname = async (nickname) => {
  await axiosInstance.patch("/api/user/nickname", {
    nickname,
  });
};

const useEditNicknameMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (nickname) => {
      return await editNickname(nickname);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useEditNicknameMutation;
