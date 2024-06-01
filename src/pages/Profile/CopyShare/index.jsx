import { useEffect } from "react";
import { CopyShareUI, DescriptionTxtUI, HeadTxtUI, OkayBtnUI } from "./styles";

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
      <HeadTxtUI>✅ 프로필 링크 복사 완료</HeadTxtUI>
      <br />
      <DescriptionTxtUI>
        Instagram 프로필 설명란에
        <br />
        링크를 추가해보세요!
      </DescriptionTxtUI>
      <br />
      <OkayBtnUI onClick={onClose}>알겠어요</OkayBtnUI>
    </CopyShareUI>
  );
};

export default CopyShare;
