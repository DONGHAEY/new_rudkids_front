import { useEffect } from "react";
import {
  CopyShareUI,
  DescriptionTxtUI,
  HeadTxtUI,
  OkayBtnUI,
  TextWrapperUI,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const CopyShare = ({ copyLink, onClose }) => {
  useEffect(() => {
    const el = document.createElement("textarea");
    el.value = copyLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }, [copyLink]);

  return (
    <CopyShareUI>
      <div>
        <Icon icon="lets-icons:check-fill" fontSize="30px" color="#00DB30" />
      </div>
      <TextWrapperUI>
        <HeadTxtUI>프로필 링크 복사 완료</HeadTxtUI>
        <DescriptionTxtUI>
          Instagram 바이오에 링크를 추가해보세요!
        </DescriptionTxtUI>
      </TextWrapperUI>
      <OkayBtnUI onClick={onClose}>확인</OkayBtnUI>
    </CopyShareUI>
  );
};

export default CopyShare;
