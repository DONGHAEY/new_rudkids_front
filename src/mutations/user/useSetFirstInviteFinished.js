import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.user, "first_invite_finished"];

const setFirstInviteFinished = async () => {
  return await axiosInstance
    .patch(`/api/user/set-firstInviteFinished`)
    .then((response) => response.data);
};

const useSetFirstInviteFinished = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: setFirstInviteFinished,
  });
};

export default useSetFirstInviteFinished;
