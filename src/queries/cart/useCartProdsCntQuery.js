import { useQuery, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";
import { KEY as userQueryKey } from "../user/useUserQuery";

export const KEY = [queryKey.cart, "cart_products_cnt"];
const getCartProducsCnt = async () => {
  return await axiosInstance
    .get(`/api/cart/cart_products_cnt`)
    .then((response) => response.data);
};

const useCartProdsCntQuery = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: KEY,
    queryFn: async () => {
      const isLoggedIn = queryClient.getQueryData(userQueryKey("my"));
      if (!isLoggedIn) {
        return 0;
      }
      return await getCartProducsCnt();
    },
  });
};

export default useCartProdsCntQuery;
