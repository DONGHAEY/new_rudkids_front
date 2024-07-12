import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";
import useUserQuery from "../../queries/user/useUserQuery";
import { useLocation, useNavigate } from "react-router-dom";
import { setUserId } from "@amplitude/analytics-browser";
import { OnboardingSteps } from "../../global/onboarding-steps";

const AuthHoc = (Page) => {
  const AuthComp = (props) => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    const [render, setRender] = useState(false);
    const { data: me, isLoading } = useUserQuery();
    const currentLocation = pathname + search;

    useEffect(() => {
      if (isLoading) return;
      if (me) {
        setUserId(me.id);
        setRender(true);
        return;
      } else {
        setUserId(null);
        navigate(`/login?callback=${currentLocation}`, {
          replace: true,
        });
        return;
      }
    }, [me, isLoading]);

    useEffect(() => {
      if (!me) return;
      if (me.onboardingStep === OnboardingSteps.COMPLETE_SIGNUP) {
        navigate("/401", {
          replace: true,
        });
        return;
      }
      if (me.onboardingStep === OnboardingSteps.COMPLETE_ACCEPT_INVITATION) {
        navigate(`/insta-info?callback=${currentLocation}`, {
          replace: true,
        });
        return;
      }
      if (me.onboardingStep === OnboardingSteps.WAITING) {
        navigate("/waiting", {
          replace: true,
        });
        return;
      }
      //강초페 관련 로직 추가 예정 기달.
    }, [me]);

    if (!render) return <Loader />;

    return <Page {...props} />;
  };

  return AuthComp;
};

export default AuthHoc;
