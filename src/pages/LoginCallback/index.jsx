import { useEffect } from "react";
import qs from "qs";
import useOauthLoginMutation from "../../mutations/auth/useOauthLoginMutation";
import { useParams } from "react-router-dom";
import Loader from "../../shared_components/Loader";
import { getLoginCallbackUrl, removeLoginCallbackUrl } from "../Login";
import { getTicketId } from "../Ticket";
import useAcceptInvitationMutation from "../../mutations/invitation/useAcceptInvitationMutation";
import { useAlert } from "../../hooks/useRudAlert";

const LoginCallbackPage = ({ routeInfo }) => {
  const alert = useAlert();
  const params = useParams();
  const platformName = params[routeInfo.paramKeys[0]];
  const oauthLoginMutation = useOauthLoginMutation(platformName);
  const acceptInvitationMutation = useAcceptInvitationMutation();

  useEffect(() => {
    if (!platformName) return;
    const savedLoginCallbackUrl = getLoginCallbackUrl();
    removeLoginCallbackUrl();
    const searchParams = qs.parse(window.location.search.slice(1));
    oauthLoginMutation
      .mutateAsync(searchParams)
      .then(async (me) => {
        if (!me.isInvited) {
          const ticketId = getTicketId();
          if (!ticketId) {
            window.location.href = "/401";
            return;
          }
          try {
            await acceptInvitationMutation.mutateAsync(ticketId);
          } catch (e) {
            alert("유효하지 않은 초대권을 받은 것 같아요!");
            window.location.href = "/401";
            return;
          }
        }
        if (!me.instagramId) {
          window.location.href = `/insta-info?callback=${savedLoginCallbackUrl}`;
          return;
        } else if (!me?.isFirstInviteFinished) {
          window.location.href = `/invite?callback=${savedLoginCallbackUrl}`;
          return;
        }
        window.location.href = savedLoginCallbackUrl;
      })
      .catch((e) => {
        alert("알 수 없는 에러가 발생했어요!");
        window.location.href = `/login`;
      });
  }, [platformName]);

  return <Loader />;
};

export default LoginCallbackPage;
