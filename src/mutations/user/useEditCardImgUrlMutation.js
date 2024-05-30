import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import queryKey from "../../queries/key";
import * as htmlToImage from "html-to-image";

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
    mutationFn: async (cardRefCurrent) => {
      const dataURI = await htmlToImage.toPng(cardRefCurrent);
      fetch(dataURI)
        .then((res) => res.blob())
        .then(async (blob) => {
          const formData = new FormData();
          const fileName = `-card.svg`;
          const convertedFile = new File([blob], fileName, {
            type: "image/svg",
          });
          formData.append("file", convertedFile);
          return await editCardImgUrl(formData);
        });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKey.user);
    },
  });
};

export default useEditCardImgUrlMutation;
