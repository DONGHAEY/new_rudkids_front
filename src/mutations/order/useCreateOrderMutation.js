import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.order, "create"];

const createOrder = async ({ cartId, shipping }) => {
  return await axiosInstance
    .post(`/api/order`, {
      cartId,
      shipping,
    })
    .then((response) => response.data);
};

const useCreateOrderMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: ({ cartId, shipping }) => createOrder({ cartId, shipping }),
  });
};

export default useCreateOrderMutation;
