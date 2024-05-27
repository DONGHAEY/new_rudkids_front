import { Loader } from "@react-three/drei";
import { useEffect, useState } from "react";
import useUserQuery from "../../queries/user/useUserQuery";

const AuthHoc = (Page) => {
  //
  const AuthComp = ({ routeInfo }) => {
    const [isLoggedInChecked, setIsLoggedInChecked] = useState(false);

    const { data: userData, isLoading } = useUserQuery();

    useEffect(() => {
      if (isLoading) return;
      if (userData) {
        if (!userData.instagramId) {
          window.location.href = `/instagram-info`;
        }
        setIsLoggedInChecked(true);
        return;
      }
      window.location.href = `/login`;
    }, [userData, isLoading]);

    if (!isLoggedInChecked) return <Loader />;

    return <Page routeInfo={routeInfo} />;
  };
  return AuthComp;
};

export default AuthHoc;
