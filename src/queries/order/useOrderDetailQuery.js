import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (order_id) => [queryKey.order, "detail", order_id];

const getOrder = async (orderId) => {
  return await axiosInstance
    .get(`/api/order/${orderId}`)
    .then((response) => response.data);
};

const useOrderDetailQuery = (orderId) => {
  return useQuery({
    queryKey: KEY(orderId),
    queryFn: async () => await getOrder(orderId),
    suspense: true,
  });
};

export default useOrderDetailQuery;
