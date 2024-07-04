import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import { KEY as userKey } from "../../queries/user/useUserQuery";

export const KEY = [mutationKey.user, "first_invite_finished"];

const setFirstInviteFinished = async () => {
  return await axiosInstance
    .patch(`/api/user/set-firstInviteFinished`)
    .then((response) => response.data);
};

const useSetFirstInviteFinished = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: setFirstInviteFinished,
    onSuccess: async () => {
      const user = await queryClient.getQueryData(userKey("my"));
      user.isFirstInviteFinished = true;
      await queryClient.setQueryData(userKey("my"), user);
    },
  });
};

export default useSetFirstInviteFinished;
