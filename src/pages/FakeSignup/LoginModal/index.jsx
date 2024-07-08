import RudWindow from "../../../shared_components/RudWindow";
import dogImgSrc from "./assets/dog.webp";
import LoginBtns from "../../../shared_components/LoginBtns";
import { ModalUI, RequireSignUI, RequireTxtUI, WrapperUI } from "./styles";

const LoginModal = ({ isOpen }) => {
  return (
    <ModalUI open={isOpen} disableAutoFocus>
      <RudWindow>
        <WrapperUI>
          <RequireSignUI>
            <img src={dogImgSrc} width="20%" />
            <RequireTxtUI>
              SNS 3초 간편 로그인을
              <br />
              사용해주세요
            </RequireTxtUI>
          </RequireSignUI>
          <LoginBtns isShowSignup={false} />
        </WrapperUI>
      </RudWindow>
    </ModalUI>
  );
};

export default LoginModal;
