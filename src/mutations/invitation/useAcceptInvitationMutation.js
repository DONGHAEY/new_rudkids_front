import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../../mutations/key";
import axiosInstance from "../../axiosInstance";
import { KEY as userQueryKey } from "../../queries/user/useUserQuery";

export const KEY = [mutationKey.invitation, "accept"];

const acceptInvitation = async (invitationId) => {
  return await axiosInstance
    .post(`/api/invitation/${invitationId}/accept`)
    .then((res) => res.data);
};

const useAcceptInvitationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (invitationId) => await acceptInvitation(invitationId),
    onSuccess: async () => {
      await queryClient.invalidateQueries(userQueryKey("my"));
    },
  });
};

export default useAcceptInvitationMutation;
