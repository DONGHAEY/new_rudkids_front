import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import queryKey from "../../queries/key";

export const KEY = [mutationKey.user, "links", "edit"];

const editLinks = (links) => {
  return axiosInstance
    .patch("/api/user/links", {
      links,
    })
    .then((res) => res.data);
};

const useEditLinksMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (links) => await editLinks(links),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useEditLinksMutation;
