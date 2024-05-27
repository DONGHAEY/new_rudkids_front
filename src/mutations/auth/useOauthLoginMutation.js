import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import qs from "qs";

export const KEY = [mutationKey.auth];

const oauthLogin = async (platformName, searchParams) => {
  return await axiosInstance
    .get(`/api/auth/${platformName}?${qs.stringify(searchParams)}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((e) => e);
};

const useOauthLoginMutation = (platformName) => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: (searchParams) => oauthLogin(platformName, searchParams),
  });
};

export default useOauthLoginMutation;
