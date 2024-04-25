import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKey from "./key";
import { getCart } from "../apis/cart/getCart";
import { getCartCnt } from "../apis/cart/getCartCnt";
import { putCartProduct } from "../apis/cart/putCartProduct";
import { editCartProductAmount } from "../apis/cart/editCartProductAmount";

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
    mutationFn: (productId) => {
      putCartProduct(productId);
      queryClient.invalidateQueries(queryKey.cart);
    },
  });
};

export const useCartProductAmountMutation = (productId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (amount) => {
      editCartProductAmount(productId, amount);
      queryClient.invalidateQueries(queryKey.cart);
    },
  });
};
