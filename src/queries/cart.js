import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKey from "./key";
import { getCart } from "../apis/cart/getCart";
import { getCartCnt } from "../apis/cart/getCartCnt";
import { putCartProduct } from "../apis/cart/putCartProduct";
import { editCartProductQuantity } from "../apis/cart/editCartProductQuantity";
import { deleteCartProduct } from "../apis/cart/deleteCartProduct";

export const useCartQuery = () => {
  return useQuery({
    queryKey: [queryKey.cart],
    queryFn: getCart,
  });
};

export const useCartCntQuery = () => {
  return useQuery({
    queryKey: [queryKey.cart, "cnt"],
    queryFn: getCartCnt,
  });
};

export const useCartProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId) => {
      await putCartProduct(productId);
    },
    onSuccess: async () => {
      const cartCntData = await queryClient.getQueryData([
        queryKey.cart,
        "cnt",
      ]);
      await queryClient.setQueryData([queryKey.cart, "cnt"], cartCntData + 1);
    },
  });
};

export const useCartProductDeleteMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [queryKey.cart, productId, "delete"],
    mutationFn: async () => {
      await deleteCartProduct(productId);
    },
    onSuccess: async () => {
      const cartData = queryClient.getQueryData(queryKey.cart);
      cartData.cartProducts = cartData?.cartProducts?.filter(
        (cartProduct) => cartProduct?.product?.id !== productId
      );
      await queryClient.setQueryData(queryKey.cart, cartData);
      const cartCntData = await queryClient.getQueryData([
        queryKey.cart,
        "cnt",
      ]);
      await queryClient.setQueryData([queryKey.cart, "cnt"], cartCntData - 1);
    },
  });
};

let quantityMutationPromise = {};
export const useCartProductQuantityMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [queryKey.cart, productId, "qunatity"],
    mutationFn: async (quantity) => {
      if (quantity <= 0) return null;
      const cartData = queryClient.getQueryData([queryKey.cart]);
      cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
        if (cartProduct?.product?.id === productId) {
          return {
            ...cartProduct,
            quantity,
          };
        }
        return cartProduct;
      });
      await queryClient.setQueryData([queryKey.cart], cartData);
      if (quantityMutationPromise[productId]) {
        quantityMutationPromise[productId][0](null);
      }
      return await new Promise((resolve, reject) => {
        quantityMutationPromise[productId] = [resolve, reject];
        setTimeout(async () => {
          const res = await editCartProductQuantity(productId, quantity);
          resolve(res);
        }, 500);
      });
    },
    onSuccess: async (data) => {
      // if (!data) return null;
      // const cartData = queryClient.getQueryData([queryKey.cart]);
      // cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
      //   if (cartProduct?.product?.id === productId) {
      //     return data;
      //   }
      //   return cartProduct;
      // });
      // await queryClient.setQueryData([queryKey.cart], cartData);
    },
  });
};
