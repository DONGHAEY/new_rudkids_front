import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";
import useUserQuery, {
  KEY as userQueryKey,
} from "../../queries/user/useUserQuery";
import { track } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.invitation, "send"];

const createInvitation = async () => {
  return await axiosInstance
    .post("/api/invitation/friend")
    .then((res) => res.data);
};

const deleteInvitation = async (invitationId) => {
  return await axiosInstance
    .delete(`/api/invitation/${invitationId}`)
    .then((res) => res.data);
};

const sendInvitation = async (invitationId) => {
  await window.navigator.share({
    title: "Rudkids",
    text: "야 ㅁㅊ 이거 너 아님?",
    url: `https://www.rud.kids/ticket/${invitationId}`,
  });
};

const useSendInvitationMutation = (type) => {
  const queryClient = useQueryClient();
  useUserQuery();

  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => {
      const invitationId = await createInvitation();
      try {
        await sendInvitation(invitationId);
        return true;
      } catch (e) {
        await deleteInvitation(invitationId);
      }
      return false;
    },

    onSuccess: async (isInviteComplete) => {
      if (isInviteComplete) {
        const me = await queryClient.getQueryData(userQueryKey("my"));
        me.invitateCnt++;
        track("send tickets", {
          times: me.invitateCnt,
          type,
        });
        await queryClient.setQueryData(userQueryKey("my"), me);
      }
    },
  });
};

export default useSendInvitationMutation;
