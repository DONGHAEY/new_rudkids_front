import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import useUserQuery from "../../queries/user/useUserQuery";
import useSetMyInviterMutation from "../../mutations/user/useSetMyInviterMutation";
import useSetMySchoolMutation from "../../mutations/user/useSetMySchoolMutation";

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

  return (
    <Modal open={isOpen} hideBackdrop={true} disableAutoFocus={true}>
      <StepsRenderer
        stepComponentSrcList={[Step1, Step2]}
        onComplete={() => {
          setIsOpen(false);
        }}
      />
    </Modal>
  );
};

export default LoginModal;
