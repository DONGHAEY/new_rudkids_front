import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import {
  useSetMyInviterMutation,
  useSetMySchoolMutation,
  useUserQuery,
} from "../../queries/user";
import { useEffect, useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: userData, isFetched } = useUserQuery();
  const setMySchoolMutation = useSetMySchoolMutation();
  const setMyInviterMutation = useSetMyInviterMutation();

  useEffect(() => {
    if (!userData) return;
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
  }, [userData]);

  const openStateUpdate = () => {
    const isLoggedin = userData ? true : false;
    const isShareCompleted = localStorage.getItem("share_complete") === "true";
    setIsOpen(!isShareCompleted || !isLoggedin);
  };

  useEffect(() => {
    if (!isFetched) return;
    openStateUpdate();
  }, [isFetched]);

  if (!isOpen) return null;
  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
