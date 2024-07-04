import { ContentUI, ModalUI, RudAlertHeadUI, RudAlertUI } from "./styles";
import closeIconSrc from "./assets/closeicon.svg";

export const RudAlert = ({ children, onClose }) => {
  return (
    <RudAlertUI>
      <RudAlertHeadUI>
        <p>Rudkids.com</p>
        <img onClick={onClose} src={closeIconSrc} />
      </RudAlertHeadUI>
      <ContentUI>{children}</ContentUI>
    </RudAlertUI>
  );
};

export const RudAlertModal = ({ children, onClose, open }) => {
  return (
    <ModalUI open={open} onClose={onClose} disableAutoFocus>
      <RudAlert onClose={onClose}>{children}</RudAlert>
    </ModalUI>
  );
};
