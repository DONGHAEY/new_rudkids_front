import {
  SpacerUI,
  LoginBtnUI,
  LoginTxtUI,
  LoginUI,
  FakeLoginFormUI,
  LoginInputUI,
} from "./styles";
import { PageUI } from "./styles";
import Background from "../../shared_components/Background";
import StorageKey from "../../storageKey";
import RudWindow from "../../shared_components/RudWindow";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";
import { useSearchParams } from "react-router-dom";
import useTossTesterLoginMutation from "../../mutations/auth/useTossTesterLoginMutation";
import LoginBtns from "../../shared_components/LoginBtns";
import { useState } from "react";
import LoginModal from "../FakeSignup/LoginModal";

export const setLoginCallbackUrl = (callbackUrl) => {
  sessionStorage.setItem(StorageKey.login_callback_url, callbackUrl);
};
export const removeLoginCallbackUrl = () => {
  sessionStorage.removeItem(StorageKey.login_callback_url);
};
export const getLoginCallbackUrl = () => {
  return sessionStorage.getItem(StorageKey.login_callback_url) ?? "/home";
};

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/home";
  const [loginModal, setLoginModal] = useState();
  const tossPaymentLoginMutation = useTossTesterLoginMutation();

  return (
    <PageUI>
      <SpacerUI />
      <RudWindow>
        <LoginUI>
          <LoginTxtUI>Login</LoginTxtUI>
          <FakeLoginFormUI>
            <LoginInputUI placeholder="아이디(이메일)" />
            <LoginInputUI placeholder="비밀번호" />
            <LoginBtnUI
              onClick={() => setLoginModal(true)}
              background="rgba(51, 51, 51, 1)"
              border="rgba(40, 40, 40, 1)"
            >
              로그인하기
            </LoginBtnUI>
          </FakeLoginFormUI>
          <LoginBtns callback={callback} />
          {searchParams.get("toss_tester") && (
            <WindowButtonUI
              onClick={async () => {
                const uuid = searchParams.get("toss_tester");
                await tossPaymentLoginMutation.mutateAsync(uuid);
              }}
            >
              TossPayments Login
            </WindowButtonUI>
          )}
        </LoginUI>
      </RudWindow>
      <LoginModal isOpen={loginModal} />
      <Background position={"absolute"} />
    </PageUI>
  );
};

export default LoginPage;
