import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import queryKey from "../../queries/key";

export const KEY = [mutationKey.user, "introduce", "edit"];

const editIntroduce = (editedIntroduce) => {
  return axiosInstance
    .patch("/api/user/introduce", {
      introduce: editedIntroduce,
    })
    .then((res) => res.data);
};

const useEditIntroduceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (editedIntroduce) => await editIntroduce(editedIntroduce),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useEditIntroduceMutation;
