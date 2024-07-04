import { RudAlert } from "../RudAlert";
import { ButtonUI } from "../RudAlert/shared_styles";
import { AskSectionUI, BtnListUI, ModalUI, WrapperUI } from "./styles";
import cautionSrc from "./assets/caution.png";

export const RudConfirm = ({ message, open, onClose, onConfirm, iconSrc }) => {
  return (
    <RudAlert onClose={onClose} open={open}>
      <WrapperUI>
        <AskSectionUI>
          <img src={iconSrc ?? cautionSrc} width="10%" />
          <p>{message}</p>
        </AskSectionUI>
        <BtnListUI>
          <ButtonUI onClick={onConfirm}>네</ButtonUI>
          <ButtonUI
            onClick={onClose}
            background="linear-gradient(180deg, #14ff00 0%, #10ce00 100%)"
          >
            취소
          </ButtonUI>
        </BtnListUI>
      </WrapperUI>
    </RudAlert>
  );
};

export const RudConfirmModal = ({
  children,
  open,
  onClose,
  message,
  onConfirm,
  iconSrc,
}) => {
  return (
    <ModalUI open={open} onClose={onClose} disableAutoFocus>
      <RudConfirm
        message={message}
        onConfirm={onConfirm}
        onClose={onClose}
        iconSrc={iconSrc}
      >
        {children}
      </RudConfirm>
    </ModalUI>
  );
};
