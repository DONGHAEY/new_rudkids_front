import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";
import { KEY as ORDER_KEY } from "../../queries/order/useOrderDetailQuery";

export const KEY = [mutationKey.order, "shipping", "edit"];

const editOrderShipping = async ({ orderId, shipping }) => {
  return await axiosInstance
    .patch(`/api/order/${orderId}/shipping`, shipping)
    .then((response) => response.data);
};

const useEditOrderShippingMutation = (orderId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (shipping) =>
      await editOrderShipping({
        orderId,
        shipping,
      }),
    onError: () => {
      alert("현재 송장번호가 등록이 되어 수정할 수 없습니다.");
    },
    onSettled: () => {
      queryClient.invalidateQueries(ORDER_KEY(orderId));
    },
  });
};

export default useEditOrderShippingMutation;
