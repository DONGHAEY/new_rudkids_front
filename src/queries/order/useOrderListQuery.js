import { useInfiniteQuery, useQuery } from "react-query";
import queryKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [queryKey.order, "list"];

const getOrderList = async ({ pageParam }) => {
  console.log(pageParam);
  return await axiosInstance
    .get(`/api/order?cursorId=${pageParam ?? ""}&take=5`)
    .then((res) => res.data);
};

const useOrderListQuery = () => {
  return useInfiniteQuery({
    queryKey: KEY,
    queryFn: getOrderList,
    initialPageParam: "",
    getNextPageParam: (lastPage) => {
      return lastPage.meta.hasNextData ? lastPage.meta?.cursor : undefined;
    },

    select: (data) => {
      return (data.pages ?? []).flatMap((page) => {
        return page?.data;
      });
    },
  });
};

export default useOrderListQuery;
