import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.user, "inviter"];

const setMyInviter = async (inviterUserId) => {
  return await axiosInstance
    .patch(`/api/user/inviter/${inviterUserId}`)
    .then((response) => response.data);
};

const useSetMyInviterMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: (inviterUserId) => setMyInviter(inviterUserId),
  });
};

export default useSetMyInviterMutation;
