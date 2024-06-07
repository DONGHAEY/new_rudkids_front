import backIconSrc from "./assets/back-icon.svg";
import { useRef } from "react";
import {
  BetweenUI,
  DescriptionUI,
  HeaderUI,
  TextWrapperUI,
  TitleUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import DynamicSpacer from "../../DynamicSpacer";

const Header = ({ title, description, backgroundColor }) => {
  const headerRef = useRef();
  const navigate = useNavigate();

  const backIconClickHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <HeaderUI backgroundColor={backgroundColor}>
        <BetweenUI ref={headerRef}>
          <img
            src={backIconSrc}
            width="33.46px"
            onClick={backIconClickHandler}
          />
          <TextWrapperUI>
            <TitleUI>{title}</TitleUI>
            {description && <DescriptionUI>{description}</DescriptionUI>}
          </TextWrapperUI>
          <img
            width="33.46px"
            style={{
              opacity: 0,
            }}
            src={backIconSrc}
          />
        </BetweenUI>
      </HeaderUI>
      <DynamicSpacer refCurrent={headerRef.current} />
    </>
  );
};

export default Header;
