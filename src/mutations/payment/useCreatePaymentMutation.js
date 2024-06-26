import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";
import queryKey from "../../queries/key";
import { Identify, identify } from "@amplitude/analytics-browser";
import moment from "moment";

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
      const identifyObj = new Identify();
      identifyObj.add("total purchase count", 1);
      identifyObj.add("total spent", Number(paymentData.amount));
      identifyObj.set("latest purchase date", moment().format("YYYY-MM-DD"));
      identify(identifyObj);
      queryClient.invalidateQueries(queryKey.order);
    },
  });
};

export default useCreatePaymentMutation;
