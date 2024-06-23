import { useEffect, useState } from "react";
import RudAlert from "../RudAlert";
import shareImgSrc from "./assets/share_way.webp";
import { ContentImgWrapperUI, ModalUI, RudAlertWrapperUI } from "./styles";

const ImgShareModal = ({ dataUri, setDataUri, fileName = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dataUri) setIsOpen(true);
  }, [dataUri]);

  const captureShare = async () => {
    if (!dataUri) {
      alert("일시적인 오류입니다");
      return;
    }
    const response = await fetch(dataUri);
    const blob = await response.blob();
    const filename = `${fileName ?? "rud-gate.png"}`;
    const imageFile = new File([blob], filename, {
      type: blob.type,
    });
    await window.navigator.share({
      files: [imageFile],
      text: "https://instagram.com/rudkidss",
    });
  };

  const close = () => {
    setDataUri(null);
    setIsOpen(false);
  };

  return (
    <ModalUI open={isOpen} onClose={close}>
      <RudAlertWrapperUI>
        <RudAlert onClose={close}>
          <ContentImgWrapperUI>
            <img src={shareImgSrc} width="80%" onClick={captureShare} />
          </ContentImgWrapperUI>
        </RudAlert>
      </RudAlertWrapperUI>
    </ModalUI>
  );
};

export default ImgShareModal;
