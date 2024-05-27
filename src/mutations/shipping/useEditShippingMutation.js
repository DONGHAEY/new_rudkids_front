import { useMutation, useQueryClient } from "react-query";
import { KEY as ShippingListKey } from "../../queries/shipping/useShippingListQuery";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.shipping, "edit"];

const editShippping = async (
  shippingId,
  {
    name,
    address,
    detailAddress,
    recieverName,
    recieverPhoneNumber,
    requestMemo,
    isDefault,
  }
) => {
  return await axiosInstance
    .put(`/api/shipping/${shippingId}`, {
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      requestMemo,
      isDefault,
    })
    .then((response) => response.data);
};

const useEditShippingMutation = (shippingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (editShippingData) =>
      await editShippping(shippingId, editShippingData),
    onSettled: () => queryClient.invalidateQueries(ShippingListKey),
  });
};

export default useEditShippingMutation;
