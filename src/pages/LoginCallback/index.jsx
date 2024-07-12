import { useEffect } from "react";
import qs from "qs";
import useOauthLoginMutation from "../../mutations/auth/useOauthLoginMutation";
import { useParams } from "react-router-dom";
import Loader from "../../shared_components/Loader";
import { getLoginCallbackUrl, removeLoginCallbackUrl } from "../Login";
import { getTicketId } from "../Ticket";
import useAcceptInvitationMutation from "../../mutations/invitation/useAcceptInvitationMutation";
import { useAlert } from "../../hooks/useRudAlert";
import { OnboardingSteps } from "../../global/onboarding-steps";

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
        alert(`${me.onboardingStep} ${OnboardingSteps.COMPLETE_SIGNUP}`);
        if (me.onboardingStep === OnboardingSteps.COMPLETE_SIGNUP) {
          const ticketId = getTicketId();
          if (!ticketId) {
            window.location.href = "/401";
            return;
          }
          try {
            await acceptInvitationMutation.mutateAsync(ticketId);
            me.onboardingStep = OnboardingSteps.COMPLETE_ACCEPT_INVITATION;
          } catch (e) {
            await alert("유효하지 않은 초대권을 받은 것 같아요!");
            window.location.href = "/401";
            return;
          }
        }
        if (me.onboardingStep === OnboardingSteps.COMPLETE_ACCEPT_INVITATION) {
          window.location.href = `/insta-info`;
          return;
        }
        if (me.onboardingStep === OnboardingSteps.WAITING) {
          window.location.href = "/waiting";
          return;
        }
        window.location.href = savedLoginCallbackUrl;
      })
      .catch(async (e) => {
        await alert(e.response.data.message ?? "알 수 없는 에러 발생");
        window.location.href = `/login`;
      });
  }, [platformName]);

  return <Loader />;
};

export default LoginCallbackPage;
