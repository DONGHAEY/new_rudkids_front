import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import qs from "qs";
import { Identify, identify } from "@amplitude/analytics-browser";
import moment, { isMoment } from "moment";

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
