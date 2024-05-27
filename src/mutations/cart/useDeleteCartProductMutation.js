import { useMutation, useQueryClient } from "react-query";
import { KEY as cartProdsCntKey } from "../../queries/cart/useCartProdsCntQuery";
import { KEY as cartKey } from "../../queries/cart/useCartQuery";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.cart, "cart_product", "delete"];

const deleteCartProduct = async (productId) => {
  return await axiosInstance
    .delete(`/api/cart/cart_product/${productId}`)
    .then((response) => response.data);
};

const useDeleteCartProductMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => await deleteCartProduct(productId),
    onSuccess: async () => {
      const cartData = queryClient.getQueryData(cartKey);
      cartData.cartProducts = cartData?.cartProducts?.filter(
        (cartProduct) => cartProduct?.product?.id !== productId
      );
      await queryClient.setQueryData(cartKey, cartData);
      const cartProdsCntData = await queryClient.getQueryData(cartProdsCntKey);
      await queryClient.setQueryData(cartProdsCntKey, cartProdsCntData - 1);
    },
  });
};

export default useDeleteCartProductMutation;
