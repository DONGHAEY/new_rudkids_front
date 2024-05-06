import { useEffect } from "react";
import LoginModal from "../Login";

const AuthHoc = (Page) => {
  //
  const AuthComp = ({ routeInfo }) => {
    return (
      <>
        <Page routeInfo={routeInfo} />
        <LoginModal />
      </>
    );
  };
  return AuthComp;
};

export default AuthHoc;
