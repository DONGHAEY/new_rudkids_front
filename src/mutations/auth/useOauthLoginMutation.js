import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import qs from "qs";
import {
  getMeUser,
  KEY as userQueryKey,
} from "../../queries/user/useUserQuery";
import {
  Identify,
  identify,
  setUserId,
  track,
} from "@amplitude/analytics-browser";
import moment from "moment";

export const KEY = [mutationKey.auth];

const oauthLogin = async (platformName, searchParams) => {
  return await axiosInstance
    .get(`/api/auth/${platformName}?${qs.stringify(searchParams)}`, {
      withCredentials: true,
    })
    .then((response) => response.data);
};

const useOauthLoginMutation = (platformName) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (searchParams) => {
      const { type } = await oauthLogin(platformName, searchParams);
      return await getMeUser().then((me) => {
        if (type === "sign_up") {
          track("complete sign up", {
            user_id: me.id,
            date: moment(me.createdAt).format("YYYY-MM-DD"),
          });
          const identifyObj = new Identify();
          identifyObj.setOnce(
            "sign up date",
            moment(me.createdAt).format("YYYY-MM-DD")
          );
          identify(identifyObj);
        }
        setUserId(me.id);
        queryClient.setQueryData(userQueryKey(), me);
        return me;
      });
    },
  });
};

export default useOauthLoginMutation;
