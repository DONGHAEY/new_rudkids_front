import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import qs from "qs";
import {
  getMeUser,
  KEY as userQueryKey,
} from "../../queries/user/useUserQuery";
import { setUserId } from "@amplitude/analytics-browser";

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: KEY,
    mutationFn: async (searchParams) => {
      await oauthLogin(platformName, searchParams);
      const me = await queryClient.fetchQuery({
        queryKey: userQueryKey("my"),
        queryFn: getMeUser,
      });
      setUserId(me.id);
      return me;
    },
  });
};

export default useOauthLoginMutation;
