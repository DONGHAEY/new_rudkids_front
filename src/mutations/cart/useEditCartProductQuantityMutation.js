import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import { KEY as CART_KEY } from "../../queries/cart/useCartQuery";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.cart, "cart_product", "qunatity", "edit"];

const editCartProductQuantity = async (productId, quantity = 1) => {
  return await axiosInstance
    .patch(`/api/cart/cart_product/${productId}/quantity`, {
      quantity,
    })
    .then((response) => response.data);
};

let quantityMutationPromise = {};
let quantityMutationTimeout = {};

//
const useEditCartProductQuantityMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (quantity) => {
      if (quantity <= 0) return null;
      const cartData = queryClient.getQueryData(CART_KEY);
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
      queryClient.setQueryData(CART_KEY, cartData);
      if (quantityMutationTimeout[productId]) {
        clearTimeout(quantityMutationTimeout[productId]);
        quantityMutationTimeout[productId] = null;
      }
      if (quantityMutationPromise[productId]) {
        quantityMutationPromise[productId][0](null);
        quantityMutationPromise[productId] = null;
      }
      return new Promise((resolve, reject) => {
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
      const cartData = queryClient.getQueryData(CART_KEY);
      cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
        if (cartProduct?.product?.id === productId) {
          return data;
        }
        return cartProduct;
      });
      await queryClient.setQueryData(CART_KEY, cartData);
    },
    onError: async (e) => {
      if (e?.response?.data?.statusCode === 404) {
        await queryClient.invalidateQueries(CART_KEY);
      }
    },
  });
};

export default useEditCartProductQuantityMutation;
