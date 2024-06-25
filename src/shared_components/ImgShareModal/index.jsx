import { useEffect } from "react";
import RudAlert from "../RudAlert";
import shareImgSrc from "./assets/share_way.webp";
import { ContentImgWrapperUI, ModalUI, RudAlertWrapperUI } from "./styles";
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
    <ModalUI open={open} onClose={close} disableAutoFocus>
      <RudAlertWrapperUI>
        <RudAlert onClose={close}>
          <ContentImgWrapperUI>
            <img src={shareImgSrc} width="80%" onClick={shareBtnClickHandler} />
          </ContentImgWrapperUI>
        </RudAlert>
      </RudAlertWrapperUI>
    </ModalUI>
  );
};

export default ImgShareModal;
