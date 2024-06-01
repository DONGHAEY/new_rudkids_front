import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";
import useUserQuery from "../../queries/user/useUserQuery";
import { useNavigate } from "react-router-dom";
import { getInvitationId } from "../../pages/Invitation";
import useAcceptInvitationMutation from "../../mutations/invitation/useAcceptInvitationMutation";

const AuthHoc = (Page) => {
  const AuthComp = (props) => {
    const navigate = useNavigate();

    const acceptInvitationMutation = useAcceptInvitationMutation();
    const [isLoggedInChecked, setIsLoggedInChecked] = useState(false);
    const { data: userData, isLoading } = useUserQuery();
    const callback = window.location.pathname + window.location.search;

    useEffect(() => {
      if (isLoading) return;
      if (!userData) {
        navigate(`/login?callback=${callback}`);
        return;
      }
      setIsLoggedInChecked(true);
    }, [userData, isLoading]);

    useEffect(() => {
      if (!userData) return;
      if (userData?.isInvited) {
        if (!userData?.instagramId && !callback?.includes("insta-info")) {
          navigate(`/insta-info?callback=${callback}`);
          return;
        }
        //
        return;
      }
      const invitationId = getInvitationId();
      if (!invitationId) {
        alert("초대권을 제대로 수락해야합니다!");
        navigate(`/404`);
        return;
      }
      (async () => {
        await acceptInvitationMutation.mutateAsync(invitationId, {
          onError: () => {
            alert("초대권을 제대로 수락해야합니다!");
            navigate(`/404`);
          },
        });
      })();
    }, [userData]);

    if (!isLoggedInChecked) return <Loader />;

    return <Page {...props} />;
  };
  return AuthComp;
};

export default AuthHoc;
