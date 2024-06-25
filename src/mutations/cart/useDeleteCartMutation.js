import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import { KEY as cartProdsCntKey } from "../../queries/cart/useCartProdsCntQuery";
import mutationKey from "../key";
import { Identify, identify } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.cart, "delete"];

export const deleteCart = async () => {
  return await axiosInstance
    .delete(`/api/cart`)
    .then((response) => response.data);
};

const useDeleteCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => {
      await deleteCart();
    },
    onSuccess: async () => {
      const identifyObj = new Identify();
      identifyObj.setOnce("cart quantity", 0);
      identify(identifyObj);
      await queryClient.setQueryData(cartProdsCntKey, 0);
    },
  });
};

export default useDeleteCartMutation;
