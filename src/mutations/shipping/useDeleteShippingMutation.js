import { useMutation, useQueryClient } from "react-query";
import { KEY as ShippingListKey } from "../../queries/shipping/useShippingListQuery";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.shipping, "delete"];

const deleteShippping = async (shippingId) => {
  return await axiosInstance
    .delete(`/api/shipping/${shippingId}`)
    .then((response) => response.data);
};

const useDeleteShippingMutation = (shippingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async () => {
      const shippingList = queryClient.getQueryData(ShippingListKey);
      queryClient.setQueriesData(
        ShippingListKey,
        shippingList.filter((shippingData) => shippingData?.id !== shippingId)
      );
      await deleteShippping(shippingId);
    },
  });
};

export default useDeleteShippingMutation;
