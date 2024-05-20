import { useMutation, useQueryClient } from "react-query";
import { KEY as cartKey } from "../../queries/cart/useCartQuery";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.cart, "shipping_price", "edit", "0"];

const editShippingPriceToZero = async () => {
  return await axiosInstance
    .patch(`/api/cart/shipping_price`, {
      data: 0,
    })
    .then((response) => response.data);
};

const useEditShippingPriceToZeroMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => {
      await editShippingPriceToZero();
    },
    onSuccess: async () => {
      const cart = await queryClient.getQueryData(cartKey);
      cart.shippingPrice = 0;
      await queryClient.setQueryData(cartKey, cart);
    },
  });
};

export default useEditShippingPriceToZeroMutation;
