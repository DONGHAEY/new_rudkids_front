import axiosInstance from "../axiosInstance";

export const getShipppingList = async () => {
  return await axiosInstance
    .get(`/api/shipping`)
    .then((response) => response.data);
};
