import queryKey from "../queries/key";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getShipppingList } from "../apis/shipping/getShippingList";
import { addShippping } from "../apis/shipping/addShipping";
import { deleteShippping } from "../apis/shipping/deleteShipping";

export const useShippingListQuery = () => {
  return useQuery({
    queryKey: [queryKey.shipping, "list"],
    queryFn: getShipppingList,
  });
};

export const useAddShippingMutation = () => {
  return useMutation({
    mutationFn: ({
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
    }) =>
      addShippping({
        name,
        address,
        detailAddress,
        recieverName,
        recieverPhoneNumber,
      }),
  });
};

export const useDeleteShippingMutation = (shippingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteShippping(shippingId),
    onSuccess: async () => {
      const shippingList = await queryClient.getQueryData([
        queryKey.shipping,
        "list",
      ]);
      await queryClient.setQueriesData(
        [queryKey.shipping, "list"],
        shippingList?.filter((shippingData) => shippingData?.id !== shippingId)
      );
    },
  });
};
