import { ButtonWrapperUI, ButtonUI, SpacerUI } from "./styles";

const BottomButton = ({ onClick, children, ...buttonProps }) => {
  return (
    <>
      <ButtonWrapperUI>
        <ButtonUI {...buttonProps} onClick={onClick}>
          {children}
        </ButtonUI>
      </ButtonWrapperUI>
      <SpacerUI />
    </>
  );
};

export default BottomButton;
