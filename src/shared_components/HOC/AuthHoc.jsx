import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";
import useUserQuery from "../../queries/user/useUserQuery";
import { useNavigate } from "react-router-dom";
import { getInvitationId } from "../../pages/Invitation";
import useAcceptInvitationMutation from "../../mutations/invitation/useAcceptInvitationMutation";
import { setLoginCallbackUrl } from "../../pages/Login";

const AuthHoc = (Page) => {
  const AuthComp = (props) => {
    const navigate = useNavigate();
    const acceptInvitationMutation = useAcceptInvitationMutation();
    const [isLoggedInChecked, setIsLoggedInChecked] = useState(false);
    const { data: userData, isLoading } = useUserQuery();
    const currentLocation = window.location.pathname + window.location.search;

    useEffect(() => {
      if (isLoading) return;
      if (!userData) {
        setLoginCallbackUrl(currentLocation);
        navigate(`/login`);
        return;
      }
      setIsLoggedInChecked(true);
    }, [userData, isLoading]);

    useEffect(() => {
      if (!userData) return;
      if (!userData?.isInvited) {
        const invitationId = getInvitationId();
        if (!invitationId) {
          alert("초대권을 받은 사람만 활동 가능합니다!!");
          navigate(`/401`);
          return;
        }
        acceptInvitationMutation.mutateAsync(invitationId, {
          onError: () => {
            alert("유효하지 않은 초대권을 받은 것 같아요!");
            navigate(`/401`);
          },
        });
      }
      if (!userData?.instagramId) {
        if (currentLocation.includes("insta-info")) return;
        navigate(`/insta-info?callback=${currentLocation}`);
        return;
      }
      if (!userData?.isFirstInviteFinished) {
        if (currentLocation.includes("first-invite")) return;
        navigate(`/first-invite?callback=${currentLocation}`);
        return;
      }
    }, [userData]);

    if (!isLoggedInChecked) return <Loader />;

    return <Page {...props} />;
  };
  return AuthComp;
};

export default AuthHoc;
