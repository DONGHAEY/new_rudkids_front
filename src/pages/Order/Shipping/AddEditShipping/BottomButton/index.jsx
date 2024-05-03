import { ButtonWrapperUI, ButtonUI, SpacerUI } from "./styles";

const BottomButton = ({ onClick, children }) => {
  return (
    <>
      <ButtonWrapperUI>
        <ButtonUI onClick={onClick}>{children}</ButtonUI>
      </ButtonWrapperUI>
      <SpacerUI />
    </>
  );
};

export default BottomButton;
