import { useMutation } from "react-query";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.payment, "create"];

const createPayment = async ({ orderId, paymentKey, amount }) => {
  return await axiosInstance
    .post(`/api/payment`, { orderId, paymentKey, amount })
    .then((response) => response.data);
};

const useCreatePaymentMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: ({ orderId, paymentKey, amount }) =>
      createPayment({
        orderId,
        paymentKey,
        amount,
      }),
  });
};

export default useCreatePaymentMutation;
