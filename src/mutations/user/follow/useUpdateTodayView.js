import { useMutation } from "react-query";
import axiosInstance from "../../../axiosInstance";
import mutationKey from "../../key";

export const KEY = [mutationKey.user, "view", "today", "edit"];

const updateTodayView = (targetUserId) => {
  return axiosInstance
    .post(`/api/user/${targetUserId}/today_view_up`)
    .then((res) => res.data);
};

const useUpdateTodayViewMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (targetUserId) => await updateTodayView(targetUserId),
  });
};

export default useUpdateTodayViewMutation;
