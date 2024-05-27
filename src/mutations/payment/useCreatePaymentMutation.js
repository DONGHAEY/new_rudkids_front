import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";
import queryKey from "../../queries/key";

export const KEY = [mutationKey.payment, "create"];

const createPayment = async ({ orderId, paymentKey, amount }) => {
  return await axiosInstance
    .post(`/api/payment`, { orderId, paymentKey, amount })
    .then((response) => response.data);
};

const useCreatePaymentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async ({ orderId, paymentKey, amount }) =>
      await createPayment({
        orderId,
        paymentKey,
        amount,
      }),
    onSuccess: (paymentData) => {
      queryClient.invalidateQueries(queryKey.order);
    },
  });
};

export default useCreatePaymentMutation;
