import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import qs from "qs";

export const KEY = [mutationKey.auth, "instagram"];

const instagramLogin = async (searchParams) => {
  return await axiosInstance
    .get(`/api/auth/instagram/callback?${qs.stringify(searchParams)}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((e) => e);
};

const useInstagramLoginMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: (searchParams) => instagramLogin(searchParams),
  });
};

export default useInstagramLoginMutation;
