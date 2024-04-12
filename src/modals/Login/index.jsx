import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useUserQuery } from "../../queries/user";

const LoginModal = () => {
  const { data: userData } = useUserQuery();

  const isLoggedin = userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";

  if (isLoggedin && isShareCompleted) {
    return null;
  }

  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
