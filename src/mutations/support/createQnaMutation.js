import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.qna, "create"];

const createQna = async (qnaData) => {
  return await axiosInstance
    .post(`/api/qna`, qnaData)
    .then((response) => response.data);
};

const useCreateQnaMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (qnaData) => await createQna(qnaData),
  });
};

export default useCreateQnaMutation;
