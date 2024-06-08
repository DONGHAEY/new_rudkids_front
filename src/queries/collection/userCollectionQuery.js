import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (userId) => [queryKey.collection, userId];

const getCollection = async (userId) => {
  return await axiosInstance
    .get(`/api/collection/${userId}`)
    .then((response) => response.data);
};

const useCollectionQuery = (userId) => {
  return useQuery({
    queryKey: KEY(userId),
    queryFn: async () => {
      if (!userId) return [];
      return await getCollection(userId);
    },
  });
};

export default useCollectionQuery;
