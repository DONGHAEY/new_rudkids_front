import {
  FooterContentsUI,
  FooterLabel,
  FooterUI,
  InfoBtnUI,
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
          <LinkUI to="/privacy">Privacy|개인정보처리방침</LinkUI>
        </FooterContentsUI>
      )}
      <FooterLabel>
        <InfoBtnUI onClick={() => setOpen(!open)}>Information</InfoBtnUI>
        <p>@rudkidss</p>
      </FooterLabel>
    </FooterUI>
  );
};

export default Footer;
