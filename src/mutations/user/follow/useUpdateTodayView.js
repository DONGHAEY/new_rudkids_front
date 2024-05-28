import { useMutation } from "react-query";
import axiosInstance from "../../../axiosInstance";
import mutationKey from "../../key";

export const KEY = [mutationKey.user, "view", "today", "edit"];

const updateTodayView = (nickname) => {
  return axiosInstance
    .post(`/api/user/${nickname}/today_view_up`)
    .then((res) => res.data);
};

const useUpdateTodayViewMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (nickname) => await updateTodayView(nickname),
  });
};

export default useUpdateTodayViewMutation;
