import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = [queryKey.cart, "cart_products_cnt"];

const getCartProducsCnt = async () => {
  return await axiosInstance
    .get(`/api/cart/cart_products_cnt`)
    .then((response) => response.data);
};

const useCartProdsCntQuery = () => {
  return useQuery({
    queryKey: KEY,
    queryFn: getCartProducsCnt,
  });
};

export default useCartProdsCntQuery;
