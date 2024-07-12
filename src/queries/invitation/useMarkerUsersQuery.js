import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (invitationId) => [
  queryKey.invitation,
  invitationId,
  "mark_users",
];

const getMarkUsers = async (invitationId) => {
  return axiosInstance
    .get(`/api/invitation/${invitationId}/mark_users`)
    .then((res) => res.data);
};

const useMarkUsersQuery = (invitationId) => {
  return useQuery({
    queryKey: KEY(invitationId),
    queryFn: async () => await getMarkUsers(invitationId),
    enabled: invitationId != undefined,
    suspense: true,
  });
};

export default useMarkUsersQuery;
