import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.order, "create"];

const createOrder = async (orderData) => {
  return await axiosInstance
    .post(`/api/order`, orderData)
    .then((response) => response.data);
};

const useCreateOrderMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (orderData) => await createOrder(orderData),
  });
};

export default useCreateOrderMutation;
