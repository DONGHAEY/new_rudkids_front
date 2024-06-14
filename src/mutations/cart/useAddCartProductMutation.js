import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import { KEY as cartProdsCntKey } from "../../queries/cart/useCartProdsCntQuery";
import mutationKey from "../key";
import { Identify, identify } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.cart, "cart_product", "add"];

export const addCartProduct = async (productId, optionIds = []) => {
  return await axiosInstance
    .post(`/api/cart/cart_product`, {
      productId,
      optionIds,
    })
    .then((response) => response.data);
};

const useAddCartProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async ({ productId, optionIds = [] }) => {
      await addCartProduct(productId, optionIds);
    },
    onSuccess: async () => {
      const cartProdsCntData = await queryClient.getQueryData(cartProdsCntKey);
      const identifyObj = new Identify();
      identifyObj.setOnce("cart quantity", cartProdsCntData + 1);
      identify(identifyObj);
      await queryClient.setQueryData(cartProdsCntKey, cartProdsCntData + 1);
    },
  });
};

export default useAddCartProductMutation;
