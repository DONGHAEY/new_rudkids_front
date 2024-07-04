import { useEffect } from "react";
import { RudAlertModal } from "../RudAlert";
import shareImgSrc from "./assets/share_way.webp";
import { ContentImgWrapperUI } from "./styles";
import { useScreenshot } from "use-react-screenshot";
import { trackClickButton } from "../../shared_analytics";
import { track } from "@amplitude/analytics-browser";

const ImgShareModal = ({
  open,
  close,
  targetRef,
  fileName = "",
  pageName = "",
  ...navigatorProps
}) => {
  const [screenshot, takeScreenshot] = useScreenshot();

  useEffect(() => {
    if (!open) return;
    takeScreenshot(targetRef.current);
  }, [open]);

  const captureShare = async () => {
    if (!screenshot) {
      alert("일시적인 오류입니다");
      return;
    }
    const response = await fetch(screenshot);
    const blob = await response.blob();
    const filename = `${fileName ?? "rud-gate.png"}`;
    const imageFile = new File([blob], filename, {
      type: blob.type,
    });
    try {
      await window.navigator.share({
        files: [imageFile],
        ...navigatorProps,
      });
      track("complete share", {
        page: pageName,
      });
    } catch (e) {}
  };

  const shareBtnClickHandler = () => {
    trackClickButton("share", {
      page: pageName,
    });
    captureShare();
  };

  return (
    <RudAlertModal onClose={close} open={open}>
      <ContentImgWrapperUI>
        <img src={shareImgSrc} width="80%" onClick={shareBtnClickHandler} />
      </ContentImgWrapperUI>
    </RudAlertModal>
  );
};

export default ImgShareModal;
