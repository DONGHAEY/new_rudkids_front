import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import queryKey from "../key";

export const KEY = (invitationId) => [queryKey.invitation, invitationId];

const getInvitation = (invitationId) => {
  return axiosInstance
    .get(`/api/invitation/${invitationId}`)
    .then((res) => res.data);
};

const useInvitationQuery = (invitationId) => {
  return useQuery({
    queryKey: KEY(invitationId),
    queryFn: async () => await getInvitation(invitationId),
    enabled: invitationId != undefined,
    suspense: true,
  });
};

export default useInvitationQuery;
