import {
  DescriptionUI,
  HeaderUI,
  TextWrapperUI,
  TitleUI,
  CenterUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import backIconSrc from "./assets/back-icon.svg";

export const Popup = ({ children, title = "", description = "" }) => {
  const navigate = useNavigate();

  const backIconClickHandler = () => {
    navigate(-1);
  };

  return (
    <CenterUI>
      <HeaderUI>
        <img src={backIconSrc} onClick={backIconClickHandler} />
        <TextWrapperUI>
          <TitleUI>{title}</TitleUI>
          {description && <DescriptionUI>{description}</DescriptionUI>}
        </TextWrapperUI>
        <img
          style={{
            opacity: 0,
          }}
          src={backIconSrc}
        />
      </HeaderUI>
      {children}
    </CenterUI>
  );
};

export default Popup;
