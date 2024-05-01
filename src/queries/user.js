import queryKey from "../queries/key";
import { useMutation, useQuery } from "react-query";
import { getMeUser, getOtherUser } from "../apis/user/getUser";
import { setMyInviter } from "../apis/user/setMyInviter";
import { getInvitedUsers } from "../apis/user/getInvitedUsers";
import { setMySchool } from "../apis/user/setMySchool";
import { getSchoolUsers } from "../apis/user/getSchoolUsers";
import { sendPhoneAuthKey } from "../apis/user/sendPhoneAuthKey";
import { setPhoneNumber } from "../apis/user/setPhoneNumber";

export const useUserQuery = () => {
  return useQuery({
    queryKey: [queryKey.user, "me"],
    queryFn: getMeUser,
  });
};

export const useOtherUserQuery = (userId) => {
  return useQuery({
    queryKey: [queryKey.user, userId],
    queryFn: () => getOtherUser(userId),
  });
};

export const useSetMyInviterMutation = () => {
  return useMutation({
    mutationFn: (inviterUserId) => setMyInviter(inviterUserId),
  });
};

export const useInvitedUsersQuery = (inviterUserId) => {
  return useQuery({
    queryKey: [queryKey.user, inviterUserId, "list"],
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
    queryKey: [queryKey.user, queryKey.school, schoolName, "list"],
    queryFn: () => getSchoolUsers(schoolName),
  });
};

export const useSendPhoneAuthKeyMutation = () => {
  return useMutation({
    mutationFn: (phoneNumber) => sendPhoneAuthKey({ phoneNumber }),
  });
};

export const useSetPhoneNumberMutation = () => {
  return useMutation({
    mutationFn: ({ phoneNumber, authKey }) =>
      setPhoneNumber({
        phoneNumber,
        authKey,
      }),
  });
};
