import { useMutation, useQuery, useQueryClient } from "react-query";
import { createOrder } from "../apis/order/createOrder";
import { getOrder } from "../apis/order/getOrder";
import queryKey from "./key";
import { editOrderShipping } from "../apis/order/editShipping";

export const useCreateOrderMutation = () => {
  return useMutation({
    mutationKey: [queryKey.order],
    mutationFn: ({ cartId, shipping }) => createOrder({ cartId, shipping }),
  });
};

export const useOrderQuery = (orderId) => {
  return useQuery({
    queryKey: [queryKey.order, orderId],
    queryFn: () => getOrder(orderId),
  });
};

export const useEditOrderShippingMutation = (orderId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (shipping) =>
      editOrderShipping({
        orderId,
        shipping,
      }),
    onError: async () => {
      alert("현재 송장번호가 등록이 되어 수정할 수 없습니다.");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries([queryKey.order, orderId]);
    },
  });
};
