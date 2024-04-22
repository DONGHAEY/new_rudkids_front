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

  const isLoggedin = !userLoading && userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";

  const setMySchoolMutation = useSetMySchoolMutation();
  const setMyInviterMutation = useSetMyInviterMutation();

  const isOpen = !isShareCompleted || !isLoggedin;

  const schoolName = localStorage.getItem("school_name");
  const inviterUserId = localStorage.getItem("inviter_user_id");

  useEffect(() => {
    if (!isLoggedin) return;
    if (schoolName) {
      setMySchoolMutation.mutate(schoolName);
    }
    if (inviterUserId) {
      setMyInviterMutation.mutate(inviterUserId);
    }
  }, [isLoggedin, schoolName, inviterUserId]);

  //이건 한번만 랜더해야함 (그렇게 안하면 꼬임)
  const stepsRenderer = useMemo(() => {
    return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
  }, []);

  if (!isOpen) {
    return null;
  }

  return stepsRenderer;
};

export default LoginModal;
