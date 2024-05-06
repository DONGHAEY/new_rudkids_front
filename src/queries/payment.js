import { useMutation } from "react-query";
import { createPayment } from "../apis/payment/createPayment";

export const useCreatePaymentMutation = () => {
  return useMutation({
    mutationFn: ({ orderId, paymentKey, amount }) =>
      createPayment({
        orderId,
        paymentKey,
        amount,
      }),
  });
};
