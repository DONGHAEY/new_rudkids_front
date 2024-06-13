import { useQuery, useQueryClient } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";
import { KEY as userQueryKey } from "../user/useUserQuery";
import { Identify, identify } from "@amplitude/analytics-browser";

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
      const isLoggedIn = queryClient.getQueryCache(userQueryKey("my"));
      if (!isLoggedIn) {
        return 0;
      }
      const productsCnt = await getCartProducsCnt();
      const identifyObj = new Identify();
      identifyObj.setOnce("cart quantity", productsCnt);
      identify(identifyObj);

      return productsCnt;
    },
  });
};

export default useCartProdsCntQuery;
