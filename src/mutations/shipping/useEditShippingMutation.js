import { useMutation, useQueryClient } from "react-query";
import { KEY as ShippingListKey } from "../../queries/shipping/useShippingListQuery";
import mutationKey from "../key";
import axiosInstance from "../../axiosInstance";

export const KEY = [mutationKey.shipping, "edit"];

const editShippping = async (
  shippingId,
  { name, address, detailAddress, recieverName, recieverPhoneNumber, isDefault }
) => {
  return await axiosInstance
    .put(`/api/shipping/${shippingId}`, {
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      isDefault,
    })
    .then((response) => response.data);
};

const useEditShippingMutation = (shippingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
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
    onSettled: () => queryClient.invalidateQueries(ShippingListKey),
  });
};

export default useEditShippingMutation;
