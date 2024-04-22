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
  const { data: userData, isLoading: userLoading } = useUserQuery();
  const isLoggedin = !userLoading && userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";
  const setMySchoolMutation = useSetMySchoolMutation();
  const setMyInviterMutation = useSetMyInviterMutation();

  const isOpen = !isShareCompleted || !isLoggedin;

  useEffect(() => {
    if (userData) {
      const schoolName = localStorage.getItem("school_name");
      const inviterUserId = localStorage.getItem("inviter_user_id");
      if (schoolName) {
        setMySchoolMutation.mutate(schoolName);
      }
      if (inviterUserId) {
        setMyInviterMutation.mutate(inviterUserId);
      }
    }
    localStorage.removeItem("school_name");
    localStorage.removeItem("inviter_user_id");
  }, [userData]);

  if (!isOpen) {
    return null;
  }

  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
