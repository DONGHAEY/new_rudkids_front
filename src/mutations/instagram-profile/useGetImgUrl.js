import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";

export const KEY = ["instagramInfo"];

const getImgUrl = async (instagramId) => {
  return await axiosInstance
    .get(`/api/instagram-profile/${instagramId}/profile_img_url`)
    .then((response) => response.data);
};

const useGetImgUrlMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (instagramId) => await getImgUrl(instagramId),
  });
};

export default useGetImgUrlMutation;
