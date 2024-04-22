import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {
  useSetMyInviterMutation,
  useSetMySchoolMutation,
  useUserQuery,
} from "../../queries/user";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const LoginModal = () => {
  const { data: userData, isLoading: userLoading } = useUserQuery();
  const params = useParams();

  const isLoggedin = !userLoading && userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";

  const setMySchoolMutation = useSetMySchoolMutation();
  const setMyInviterMutation = useSetMyInviterMutation();

  const isOpen = !isShareCompleted || !isLoggedin;

  const schoolName = params["school_name"];
  const inviterUserId = params["inviter_user_id"];

  useEffect(() => {
    if (!userData) return;
    if (!isOpen) return;
    if (schoolName) {
      setMySchoolMutation.mutate(schoolName);
    }
    if (inviterUserId) {
      setMyInviterMutation.mutate(inviterUserId);
    }
  }, [userData, isOpen, schoolName, inviterUserId]);

  if (!isOpen) {
    return null;
  }

  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
