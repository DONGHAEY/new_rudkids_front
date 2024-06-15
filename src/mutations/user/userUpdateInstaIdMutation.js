import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import { KEY as userQueryKey } from "../../queries/user/useUserQuery";
import { Identify, identify, track } from "@amplitude/analytics-browser";
import moment from "moment";

export const KEY = [mutationKey.user, "instaId", "edit"];

const updateInstaId = async (instagramId) => {
  return await axiosInstance
    .patch(`/api/user/instagramId`, {
      instagramId,
    })
    .then((response) => response.data);
};

const useUpdateInstaIdMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (instaId) => {
      await updateInstaId(instaId);
    },
  });
};

export default useUpdateInstaIdMutation;
