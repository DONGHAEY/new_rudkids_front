import Background from "../../shared_components/Background";
import { PageUI } from "./styles";
import inputBoxSrc from "./assets/input_boxes.webp";
import { useState } from "react";
import LoginModal from "./LoginModal";

const FakeSignup = () => {
  //
  const [loginModal, setLoginModal] = useState(false);

  const fakeClickHandler = () => {
    setLoginModal(true);
  };

  return (
    <PageUI>
      <img src={inputBoxSrc} width="85%" onClick={fakeClickHandler} />
      <Background />
      <LoginModal isOpen={loginModal} />
    </PageUI>
  );
};

export default FakeSignup;
