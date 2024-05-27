import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import { KEY as cartProdsCntKey } from "../../queries/cart/useCartProdsCntQuery";
import mutationKey from "../key";

export const KEY = [mutationKey.cart, "cart_product", "add"];

export const addCartProduct = async (productId) => {
  return await axiosInstance
    .post(`/api/cart/cart_product`, {
      productId,
    })
    .then((response) => response.data);
};

const useAddCartProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (productId) => {
      await addCartProduct(productId);
    },
    onSuccess: async () => {
      const cartProdsCntData = await queryClient.getQueryData(cartProdsCntKey);
      await queryClient.setQueryData(cartProdsCntKey, cartProdsCntData + 1);
    },
  });
};

export default useAddCartProductMutation;
