import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import queryKey from "../../queries/key";

export const KEY = [mutationKey.user, "cardImgUrl", "edit"];

const editCardImgUrl = (formData) => {
  return axiosInstance
    .patch("/api/user/cardImgUrl", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};

const useEditCardImgUrlMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (formData) => {
      return await editCardImgUrl(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useEditCardImgUrlMutation;
