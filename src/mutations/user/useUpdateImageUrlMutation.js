import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.user, "imageUrl", "edit"];

const updateUserImgUrl = async (imageUrl) => {
  return await axiosInstance
    .patch(`/api/user/imageUrl`, {
      imageUrl,
    })
    .then((response) => response.data);
};

const useUpdateImageUrlMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (imageUrl) => await updateUserImgUrl(imageUrl),
  });
};

export default useUpdateImageUrlMutation;
