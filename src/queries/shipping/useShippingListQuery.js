import { useQuery } from "react-query";
import queryKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [queryKey.shipping, "list"];

const getShipppingList = async () => {
  return await axiosInstance
    .get(`/api/shipping`)
    .then((response) => response.data);
};

const useShippingListQuery = () => {
  return useQuery({
    queryKey: KEY,
    queryFn: getShipppingList,
  });
};

export default useShippingListQuery;
