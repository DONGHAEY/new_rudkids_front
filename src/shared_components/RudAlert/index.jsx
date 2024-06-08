import { ContentUI, RudAlertHeadUI, RudAlertUI } from "./styles";
import closeIconSrc from "./assets/closeicon.svg";

//
const RudAlert = ({ children }) => {
  return (
    <RudAlertUI>
      <RudAlertHeadUI>
        <p>Rudkids.com</p>
        <img src={closeIconSrc} />
      </RudAlertHeadUI>
      <ContentUI>{children}</ContentUI>
    </RudAlertUI>
  );
};

export default RudAlert;
