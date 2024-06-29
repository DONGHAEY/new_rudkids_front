import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = [queryKey.cart, "all"];

const getCart = async () => {
  return await axiosInstance.get(`/api/cart`).then((response) => response.data);
};

const useCartQuery = () => {
  return useQuery({
    queryKey: KEY,
    queryFn: getCart,
    suspense: true,
  });
};

export default useCartQuery;
