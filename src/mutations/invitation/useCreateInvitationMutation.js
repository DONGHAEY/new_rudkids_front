import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../../mutations/key";
import axiosInstance from "../../axiosInstance";
import { KEY as userQueryKey } from "../../queries/user/useUserQuery";
import { track } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.invitation, "create"];

const createInvitation = async () => {
  return await axiosInstance
    .post("/api/invitation/friend")
    .then((res) => res.data);
};

const useCreateInvitationMutation = (page = "onboarding") => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: createInvitation,
    onSuccess: async () => {
      const me = await queryClient.getQueryData(userQueryKey("my"));
      me.invitateCnt++;
      track("send tickets", {
        times: me.invitateCnt,
        type: page,
      });
      await queryClient.setQueryData(userQueryKey("my"), me);
    },
  });
};

export default useCreateInvitationMutation;
