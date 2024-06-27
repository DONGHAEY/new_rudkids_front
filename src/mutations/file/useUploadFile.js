import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";
import mutationKey from "../key";

export const KEY = [mutationKey.file, "upload"];

const uploadFile = async (file, path) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("path", path);
  return await axiosInstance
    .post(`/api/file/upload`, formData)
    .then((response) => response.data);
};

const useUploadFileMutation = () => {
  return useMutation({
    mutationKey: KEY,
    mutationFn: async (file, path) => await uploadFile(file, path),
  });
};

export default useUploadFileMutation;
