import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";
import { useNavigate } from "react-router-dom";

export const KEY = [mutationKey.auth, "toss_tester"];

const tossTesterLogin = async () => {
  return await axiosInstance
    .post(`/api/auth/toss_tester`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((e) => e);
};

const useTossTesterLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => await tossTesterLogin(),
    onSuccess: () => {
      navigate("/");
    },
  });
};

export default useTossTesterLoginMutation;
