import { useQuery } from "react-query";
import queryKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = (product_name) => [queryKey.product, "detail", product_name];

export const getProductDetail = async (productName) => {
  return await axiosInstance
    .get(`/api/product/${productName}`)
    .then((response) => response.data);
};

const useProductDetailQuery = (productName) => {
  return useQuery({
    queryKey: KEY(productName),
    queryFn: async () => await getProductDetail(productName),
  });
};

export default useProductDetailQuery;
