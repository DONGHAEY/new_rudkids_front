import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../../mutations/key";
import axiosInstance from "../../axiosInstance";
import { KEY as userQueryKey } from "../../queries/user/useUserQuery";

export const KEY = [mutationKey.invitation, "delete"];

const deleteInvitation = async (invitationId) => {
  return await axiosInstance
    .delete(`/api/invitation/${invitationId}`)
    .then((res) => res.data);
};

const useDeleteInvitationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (invitationId) => deleteInvitation(invitationId),
    onSuccess: async () => {
      const me = await queryClient.getQueryData(userQueryKey("my"));
      if (!me) return;
      me.invitateCnt--;
      await queryClient.setQueryData(userQueryKey("my"), me);
    },
  });
};

export default useDeleteInvitationMutation;
