import queryKey from "../queries/key";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getShipppingList } from "../apis/shipping/getShippingList";
import { addShippping } from "../apis/shipping/addShipping";
import { editShippping } from "../apis/shipping/editShipping";
import { deleteShippping } from "../apis/shipping/deleteShipping";
import { searchAddress } from "../apis/shipping/searchAddress";

export const useShippingListQuery = () => {
  return useQuery({
    queryKey: [queryKey.shipping, "list"],
    queryFn: getShipppingList,
  });
};

export const useAddShippingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSettled: async () => {
      await queryClient.invalidateQueries([queryKey.shipping, "list"]);
    },
    mutationFn: ({
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      isDefault,
    }) =>
      addShippping({
        name,
        address,
        detailAddress,
        recieverName,
        recieverPhoneNumber,
        isDefault,
      }),
  });
};

export const useEditShippingMutation = (shippingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    onSettled: async () => {
      await queryClient.invalidateQueries([queryKey.shipping, "list"]);
    },
    mutationFn: ({
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      isDefault,
    }) =>
      editShippping(shippingId, {
        name,
        address,
        detailAddress,
        recieverName,
        recieverPhoneNumber,
        isDefault,
      }),
  });
};

export const useDeleteShippingMutation = (shippingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const shippingList = await queryClient.getQueryData([
        queryKey.shipping,
        "list",
      ]);
      await queryClient.setQueriesData(
        [queryKey.shipping, "list"],
        shippingList?.filter((shippingData) => shippingData?.id !== shippingId)
      );
      deleteShippping(shippingId);
    },
  });
};

export const useSearchAddressQuery = (query) => {
  return useQuery({
    queryKey: ["address", query],
    queryFn: () => searchAddress(query),
  });
};
