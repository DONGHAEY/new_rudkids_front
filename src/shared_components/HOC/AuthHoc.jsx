import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";
import useUserQuery from "../../queries/user/useUserQuery";
import { useNavigate } from "react-router-dom";
import { setUserId } from "@amplitude/analytics-browser";

const AuthHoc = (Page) => {
  const AuthComp = (props) => {
    const navigate = useNavigate();
    const [render, setRender] = useState(false);
    const { data: userData, isLoading } = useUserQuery();
    const currentLocation = window.location.pathname + window.location.search;

    useEffect(() => {
      if (isLoading) return;
      if (userData) {
        setUserId(userData.id);
        setRender(true);
        return;
      } else {
        setUserId(null);
        window.location.href = `/login?callback=${currentLocation}`;
        return;
      }
    }, [userData, isLoading]);

    useEffect(() => {
      if (!userData) return;
      if (!userData?.isInvited) {
        window.location.href = "/401";
        return;
      }
      if (!userData?.instagramId) {
        window.location.href = `/insta-info?callback=${currentLocation}`;
        return;
      }
      if (!userData?.isFirstInviteFinished) {
        window.location.href = `/invite?callback=${currentLocation}`;
        return;
      }
    }, [userData]);

    if (!render) return <Loader />;

    return <Page {...props} />;
  };

  return AuthComp;
};

export default AuthHoc;
