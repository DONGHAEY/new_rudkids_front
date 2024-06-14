import { useMutation, useQueryClient } from "react-query";
import { KEY as cartProdsCntKey } from "../../queries/cart/useCartProdsCntQuery";
import { KEY as cartKey } from "../../queries/cart/useCartQuery";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";
import { Identify, identify } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.cart, "cart_product", "delete"];

const deleteCartProduct = async (id) => {
  return await axiosInstance
    .delete(`/api/cart/cart_product/${id}`)
    .then((response) => response.data);
};

const useDeleteCartProductMutation = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => await deleteCartProduct(id),
    onSuccess: async () => {
      const cartData = queryClient.getQueryData(cartKey);
      cartData.cartProducts = cartData?.cartProducts?.filter(
        (cartProduct) => cartProduct?.id !== id
      );
      await queryClient.setQueryData(cartKey, cartData);
      const cartProdsCntData = await queryClient.getQueryData(cartProdsCntKey);
      const identifyObj = new Identify();
      identifyObj.setOnce("cart quantity", cartProdsCntData + 1);
      identify(identifyObj);
      await queryClient.setQueryData(cartProdsCntKey, cartProdsCntData - 1);
    },
  });
};

export default useDeleteCartProductMutation;
