import { useMutation } from "react-query";

export const useCreatePaymentMutation = () => {
  return useMutation({
    mutationFn: ({ orderId, paymentKey }) =>
      createPayment({
        orderId,
        paymentKey,
      }),
  });
};
