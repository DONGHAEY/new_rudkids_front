import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKey from "./key";
import { getCart } from "../apis/cart/getCart";
import { getCartCnt } from "../apis/cart/getCartCnt";
import { addCartProduct } from "../apis/cart/addCartProduct";
import { editCartProductQuantity } from "../apis/cart/editCartProductQuantity";
import { deleteCartProduct } from "../apis/cart/deleteCartProduct";
import { setShippingPriceToZero } from "../apis/cart/patchShippingPrice";

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

export const useSetShippingPriceToZeroMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await setShippingPriceToZero();
    },
    onSuccess: async () => {
      const cart = await queryClient.getQueryData([queryKey.cart]);
      cart.shippingPrice = 0;
      queryClient.setQueryData([queryKey.cart], cart);
    },
  });
};

export const useCartProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId) => {
      await addCartProduct(productId);
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
let quantityMutationTimeout = {};
export const useCartProductQuantityMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [queryKey.cart, productId, "qunatity"],
    mutationFn: async (quantity) => {
      if (quantity <= 0) return null;
      const cartData = queryClient.getQueryData([queryKey.cart]);
      if (cartData?.cartProducts?.length) {
        cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
          if (cartProduct?.product?.id === productId) {
            return {
              ...cartProduct,
              quantity,
            };
          }
          return cartProduct;
        });
      }
      await queryClient.setQueryData([queryKey.cart], cartData);
      if (quantityMutationTimeout[productId]) {
        clearTimeout(quantityMutationTimeout[productId]);
        quantityMutationTimeout[productId] = null;
      }
      if (quantityMutationPromise[productId]) {
        quantityMutationPromise[productId][0](null);
        quantityMutationPromise[productId] = null;
      }
      return await new Promise((resolve, reject) => {
        const timeout = setTimeout(async () => {
          let res = null;
          try {
            res = await editCartProductQuantity(productId, quantity);
          } catch (e) {
            reject(e);
          }
          resolve(res);
          quantityMutationTimeout[productId] = null;
          quantityMutationPromise[productId] = null;
        }, 350);
        quantityMutationTimeout[productId] = timeout;
        quantityMutationPromise[productId] = [resolve, reject];
      });
    },
    onSuccess: async (data) => {
      if (!data) return null;
      const cartData = queryClient.getQueryData([queryKey.cart]);
      cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
        if (cartProduct?.product?.id === productId) {
          return data;
        }
        return cartProduct;
      });
      await queryClient.setQueryData([queryKey.cart], cartData);
    },
    onError: async (e) => {
      console.log(e, "--");
      if (e?.response?.data?.statusCode === 404) {
        await queryClient.invalidateQueries([queryKey.cart]);
      }
    },
  });
};
