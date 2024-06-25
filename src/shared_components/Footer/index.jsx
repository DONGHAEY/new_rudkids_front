import { trackClickButton } from "../../shared_analytics";
import {
  FooterContentsUI,
  FooterLabel,
  FooterUI,
  InfoBtnUI,
  InstaLinkUI,
  LinkUI,
} from "./styles";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <FooterUI>
      {open && (
        <FooterContentsUI>
          상호명: 루키즈 / 대표자명: 이규진 / 사업자등록번호: 717-09-02356 /
          통신판매업신고번호: 2023-부산기장-0498 / 사업장주소: 부산광역시 기장군
          기장읍 차성로441번길 7, 2동 1209호(태영아파트) Tel: 0507-1485-5602 /
          Email: rudkidss@gmail.com
          <br />
          <LinkUI to="/legal">Legal|법률</LinkUI>
        </FooterContentsUI>
      )}
      <FooterLabel>
        <InfoBtnUI onClick={() => setOpen(!open)}>Information</InfoBtnUI>
        <InstaLinkUI
          href={"https://www.instagram.com/rudkidss"}
          onClick={() => {
            trackClickButton("rudkidss instagram", {
              page: "footer",
            });
          }}
        >
          @rudkidss
        </InstaLinkUI>
      </FooterLabel>
    </FooterUI>
  );
};

export default Footer;
