import axiosInstance from "../../axiosInstance";
import { KEY as shippingListKey } from "../../queries/shipping/useShippingListQuery";
import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";

export const KEY = [mutationKey.shipping, "add"];

const addShippping = async ({
  name,
  address,
  detailAddress,
  recieverName,
  recieverPhoneNumber,
  isDefault,
}) => {
  return await axiosInstance
    .post(`/api/shipping`, {
      name,
      address,
      detailAddress,
      recieverName,
      recieverPhoneNumber,
      isDefault,
    })
    .then((response) => response.data);
};

const useAddShippingMutation = () => {
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
      addShippping({
        name,
        address,
        detailAddress,
        recieverName,
        recieverPhoneNumber,
        isDefault,
      }),
    onSettled: () => queryClient.invalidateQueries(shippingListKey),
  });
};

export default useAddShippingMutation;
