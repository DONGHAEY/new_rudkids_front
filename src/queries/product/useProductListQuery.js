import { useQuery } from "react-query";
import queryKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [queryKey.product, "list"];

const getProductList = async () => {
  return await axiosInstance
    .get(`/api/product`)
    .then((response) => response.data);
};

const useProductListQuery = () => {
  return useQuery({
    queryKey: KEY,
    queryFn: async () => await getProductList(),
  });
};

export default useProductListQuery;
