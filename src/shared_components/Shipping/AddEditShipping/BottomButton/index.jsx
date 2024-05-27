import { ButtonWrapperUI, ButtonUI, SpacerUI } from "./styles";

const BottomButton = ({ onClick, children, disable, ...buttonProps }) => {
  return (
    <>
      <ButtonWrapperUI>
        <ButtonUI {...buttonProps} onClick={onClick} $disable={disable}>
          {children}
        </ButtonUI>
      </ButtonWrapperUI>
      <SpacerUI />
    </>
  );
};

export default BottomButton;
