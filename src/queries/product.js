import { useQuery } from "react-query";
import queryKey from "./key";
import { getProduct } from "../apis/product/getProduct";
import { getProductList } from "../apis/product/getProductList";

export const useProductQuery = (productName) => {
  return useQuery({
    queryKey: [queryKey.product, productName],
    queryFn: () => getProduct(productName),
  });
};

export const useProductListQuery = () => {
  return useQuery({
    queryKey: [queryKey.product, "list"],
    queryFn: () => getProductList(),
  });
};
