import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (query) => [queryKey.shipping, "address", "search", query];

const searchAddress = async (query) => {
  return axiosInstance
    .get(`/api/shipping/searchAddress?query=${query}`)
    .then((res) => res.data);
};

const useSearchAddressQuery = (query) => {
  return useQuery({
    queryKey: KEY(query),
    queryFn: () => searchAddress(query),
    suspense: false,
  });
};

export default useSearchAddressQuery;
