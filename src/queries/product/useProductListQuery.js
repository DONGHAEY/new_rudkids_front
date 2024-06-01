import { useQuery } from "react-query";
import queryKey from "../key";
import axiosInstance from "../../axiosInstance";
import qs from "qs";

export const KEY = [queryKey.product, "list"];

const getProductList = async (searchParams) => {
  const str = qs.stringify(searchParams);
  return await axiosInstance
    .get(`/api/product?${str}`, searchParams)
    .then((response) => response.data);
};

const useProductListQuery = (searchParams) => {
  return useQuery({
    queryKey: [...KEY, searchParams],
    queryFn: async () => await getProductList(searchParams),
  });
};

export default useProductListQuery;
