import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {
  useSetMyInviterMutation,
  useSetMySchoolMutation,
  useUserQuery,
} from "../../queries/user";
import { useEffect } from "react";

const LoginModal = () => {
  const { data: userData } = useUserQuery();

  const isLoggedin = userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";

  const setMySchoolMutation = useSetMySchoolMutation();
  const setMyInviterMutation = useSetMyInviterMutation();

  const isOpen = !isShareCompleted || !isLoggedin;

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

  if (!isOpen) {
    return null;
  }

  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
