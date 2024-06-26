import { useEffect } from "react";
import qs from "qs";
import useOauthLoginMutation from "../../mutations/auth/useOauthLoginMutation";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../shared_components/Loader";
import { getLoginCallbackUrl, removeLoginCallbackUrl } from "../Login";
import { getTicketId } from "../Ticket";
import useAcceptInvitationMutation from "../../mutations/invitation/useAcceptInvitationMutation";

const LoginCallbackPage = ({ routeInfo }) => {
  const params = useParams();
  const platformName = params[routeInfo.paramKeys[0]];
  const oauthLoginMutation = useOauthLoginMutation(platformName);
  const acceptInvitationMutation = useAcceptInvitationMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!platformName) return;
    (async () => {
      const savedLoginCallbackUrl = getLoginCallbackUrl();
      removeLoginCallbackUrl();
      const searchParams = qs.parse(window.location.search.slice(1));
      await oauthLoginMutation.mutateAsync(searchParams, {
        onError: (e) => {
          alert("알 수 없는 에러가 발생했어요!");
          navigate(`/login`);
        },
        onSuccess: async (me) => {
          if (!me.isInvited) {
            const ticketId = getTicketId();
            if (!ticketId) {
              navigate(`/401`);
              return;
            }
            try {
              await acceptInvitationMutation.mutateAsync(ticketId);
            } catch (e) {
              alert("유효하지 않은 초대권을 받은 것 같아요!");
              navigate(`/401`);
              return;
            }
          }
          if (!me.instagramId) {
            navigate(`/insta-info?callback=${savedLoginCallbackUrl}`, {
              replace: true,
            });
            return;
          } else if (!me?.isFirstInviteFinished) {
            navigate(`/invite?callback=${savedLoginCallbackUrl}`, {
              replace: true,
            });
            return;
          }
          navigate(savedLoginCallbackUrl, {
            replace: true,
          });
        },
      });
    })();
  }, [platformName]);

  return <Loader />;
};

export default LoginCallbackPage;
