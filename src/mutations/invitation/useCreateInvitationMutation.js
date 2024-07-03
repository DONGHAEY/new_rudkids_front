import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../../mutations/key";
import axiosInstance from "../../axiosInstance";
import useUserQuery, {
  KEY as userQueryKey,
} from "../../queries/user/useUserQuery";
import { track } from "@amplitude/analytics-browser";
import useDeleteInvitationMutation from "./deleteInvitationMutation";

export const KEY = [mutationKey.invitation, "create"];

const createInvitation = async () => {
  return await axiosInstance
    .post("/api/invitation/friend")
    .then((res) => res.data);
};

const useCreateInvitationMutation = () => {
  const queryClient = useQueryClient();

  const { data: me } = useUserQuery();
  const deleteInvitationMutation = useDeleteInvitationMutation();

  return useMutation({
    mutationKey: KEY,
    mutationFn: createInvitation,
    onSuccess: async (invitationId) => {
      try {
        await window.navigator.share({
          title: "Rudkids",
          text: "야 ㅁㅊ 이거 너 아님?",
          url: `https://www.rud.kids/ticket/${invitationId}`,
        });
        me.invitateCnt++;
        await queryClient.setQueryData(userQueryKey("my"), me);
        track("send tickets", {
          times: me.invitateCnt,
          type: "?",
        });
      } catch (e) {
        await deleteInvitationMutation.mutateAsync(invitationId);
      }
    },
  });
};

export default useCreateInvitationMutation;
