import { useMutation, useQuery } from "react-query";
import { createOrder } from "../apis/order/createOrder";
import { getOrder } from "../apis/order/getOrder";
import queryKey from "./key";

export const useCreateOrderMutation = () => {
  return useMutation({
    mutationFn: (cartId) => createOrder({ cartId }),
  });
};

export const useOrderQuery = (orderId) => {
  return useQuery({
    queryKey: [queryKey.order, orderId],
    queryFn: () => getOrder(orderId),
  });
};
