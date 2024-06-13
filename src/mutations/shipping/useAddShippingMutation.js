import axiosInstance from "../../axiosInstance";
import { KEY as shippingListKey } from "../../queries/shipping/useShippingListQuery";
import { useMutation, useQueryClient } from "react-query";
import mutationKey from "../key";
import { track } from "@amplitude/analytics-browser";

export const KEY = [mutationKey.shipping, "add"];

const addShippping = async ({
  name,
  address,
  detailAddress,
  recieverName,
  recieverPhoneNumber,
  requestMemo,
  isDefault,
}) => {
  return await axiosInstance
    .post(`/api/shipping`, {
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

const useAddShippingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (addShippingData) => await addShippping(addShippingData),
    onSuccess: () => {
      track("add shipping Info");
    },
    onSettled: () => queryClient.invalidateQueries(shippingListKey),
  });
};

export default useAddShippingMutation;
