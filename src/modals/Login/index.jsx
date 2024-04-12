import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useUserQuery } from "../../queries/user";

const LoginModal = () => {
  // const { data: userData, isLoading: userLoading } = useUserQuery();
  // const isLoggedin = !userLoading && userData ? true : false;
  const isShareCompleted = localStorage.getItem("share_complete") === "true";

  const isOpen = !isShareCompleted;

  if (!isOpen) {
    return null;
  }

  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
