import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {
  useSetMyInviterMutation,
  useSetMySchoolMutation,
  useUserQuery,
} from "../../queries/user";
import { useEffect, useMemo } from "react";

const LoginModal = () => {
  const { data: userData, isLoading: userLoading } = useUserQuery();

  const isLoggedin = userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";

  const setMySchoolMutation = useSetMySchoolMutation();
  const setMyInviterMutation = useSetMyInviterMutation();

  const isOpen = !isShareCompleted || (!isLoggedin && !userLoading);

  useEffect(() => {
    if (!isLoggedin) return;
    const schoolName = localStorage.getItem("school_name");
    const inviterUserId = localStorage.getItem("inviter_user_id");
    (async () => {
      if (schoolName) {
        await setMySchoolMutation.mutateAsync(schoolName);
      }
      if (inviterUserId) {
        await setMyInviterMutation.mutateAsync(inviterUserId);
      }
    })();
  }, [isLoggedin]);

  const stepComponentSrcList = [Step1, Step2];

  if (!isOpen) {
    return null;
  }

  return <StepsRenderer stepComponentSrcList={stepComponentSrcList} />;
};

export default LoginModal;
