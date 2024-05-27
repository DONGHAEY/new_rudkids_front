import { useMutation } from "react-query";
import mutationKey from "../../mutations/key";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.invitation, "create"];

const createInvitation = async () => {
  return await axiosInstance
    .post("/api/invitation/friend")
    .then((res) => res.data);
};

const useCreateInvitationMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: createInvitation,
  });
};

export default useCreateInvitationMutation;
