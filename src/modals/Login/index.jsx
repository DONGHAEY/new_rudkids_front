import StepsRenderer from "./StepsRenderer";
import Step1 from "./Step1";
import Step2 from "./Step2";

const LoginModal = () => {
  return <StepsRenderer stepComponentSrcList={[Step1, Step2]} />;
};

export default LoginModal;
