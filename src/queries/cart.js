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
      await queryClient.invalidateQueries(queryKey.cart);
    },
  });
};

export const useCartProductDeleteMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await deleteCartProduct(productId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKey.cart);
    },
  });
};

export const useCartProductQuantityMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (quantity) => {
      await editCartProductQuantity(productId, quantity);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKey.cart);
    },
  });
};
