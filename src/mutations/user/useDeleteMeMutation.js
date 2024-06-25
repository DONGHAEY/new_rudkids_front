import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import { KEY as userKey } from "../../queries/user/useUserQuery";
import { track } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.user, "delete"];

const deleteMeUser = async (imageUrl) => {
  return await axiosInstance
    .delete(`/api/user`, {
      imageUrl,
    })
    .then((response) => response.data);
};

const useDeleteMeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => {
      await deleteMeUser();
      await queryClient.invalidateQueries(userKey("my"));
    },
    onSuccess: () => {
      track("complete delete user");
    },
  });
};

export default useDeleteMeMutation;
