import queryKey from "../queries/key";
import { useMutation, useQuery } from "react-query";
import { getUser } from "../apis/user/getUser";
import { setMyInviter } from "../apis/user/setMyInviter";
import { getInvitedUsers } from "../apis/user/getInvitedUsers";
import { setMySchool } from "../apis/user/setMySchool";
import { getSchoolUsers } from "../apis/user/getSchoolUsers";

export const useUserQuery = () => {
  return useQuery({
    queryKey: [queryKey.user, "my"],
    queryFn: getUser,
  });
};

export const useSetMyInviterMutation = () => {
  return useMutation({
    mutationFn: setMyInviter,
  });
};

export const useInvitedUsersQuery = (inviterUserId) => {
  return useQuery({
    queryKey: [queryKey.user, "invited", "list"],
    queryFn: () => getInvitedUsers(inviterUserId),
  });
};

export const useSetMySchoolMutation = () => {
  return useMutation({
    mutationFn: (schoolName) => setMySchool(schoolName),
  });
};

export const useSchoolUsersQuery = (schoolName) => {
  return useQuery({
    queryKey: [queryKey.user, queryKey.school, "list"],
    queryFn: () => getSchoolUsers(schoolName),
  });
};
