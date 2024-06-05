import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import { KEY as CART_KEY } from "../../queries/cart/useCartQuery";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.cart, "cart_product", "qunatity", "edit"];

const editCartProductQuantity = async (id, quantity = 1) => {
  return await axiosInstance
    .patch(`/api/cart/cart_product/${id}/quantity`, {
      quantity,
    })
    .then((response) => response.data);
};

let quantityMutationPromise = {};
let quantityMutationTimeout = {};

//
const useEditCartProductQuantityMutation = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (quantity) => {
      if (quantity <= 0) return null;
      const cartData = queryClient.getQueryData(CART_KEY);
      if (cartData?.cartProducts?.length) {
        cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
          if (cartProduct?.id === id) {
            return {
              ...cartProduct,
              quantity,
            };
          }
          return cartProduct;
        });
      }
      queryClient.setQueryData(CART_KEY, cartData);
      if (quantityMutationTimeout[id]) {
        clearTimeout(quantityMutationTimeout[id]);
        quantityMutationTimeout[id] = null;
      }
      if (quantityMutationPromise[id]) {
        quantityMutationPromise[id][0](null);
        quantityMutationPromise[id] = null;
      }
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(async () => {
          let res = null;
          try {
            res = await editCartProductQuantity(id, quantity);
          } catch (e) {
            reject(e);
          }
          resolve(res);
          quantityMutationTimeout[id] = null;
          quantityMutationPromise[id] = null;
        }, 350);
        quantityMutationTimeout[id] = timeout;
        quantityMutationPromise[id] = [resolve, reject];
      });
    },
    onSuccess: async (data) => {
      // if (!data) return null;
      // const cartData = queryClient.getQueryData(CART_KEY);
      // cartData.cartProducts = cartData?.cartProducts?.map((cartProduct) => {
      //   if (cartProduct?.id === id) {
      //     return data;
      //   }
      //   return cartProduct;
      // });
      // await queryClient.setQueryData(CART_KEY, cartData);
    },
    onError: async (e) => {
      await queryClient.invalidateQueries(CART_KEY);
      // if (e?.response?.data?.statusCode === 404) {
      //   await queryClient.invalidateQueries(CART_KEY);
      // }
    },
  });
};

export default useEditCartProductQuantityMutation;
