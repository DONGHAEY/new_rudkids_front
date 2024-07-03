import RudAlert from "../../../shared_components/RudAlert";
import cautionSrc from "./assets/caution.png";
import { ButtonUI } from "../../../shared_components/RudAlert/shared_styles";
import { AskSectionUI, BtnListUI, CenterModalUI, WrapperUI } from "./styles";

const DeleteAlert = ({ open, setOpen, onConfirm }) => {
  return (
    <CenterModalUI open={open} onClick={(e) => e.stopPropagation()}>
      <RudAlert onClose={() => setOpen(false)}>
        <WrapperUI>
          <AskSectionUI>
            <img src={cautionSrc} width="10%" />
            <p>정말로 삭제하겠습니까?</p>
          </AskSectionUI>
          <BtnListUI>
            <ButtonUI onClick={onConfirm}>삭제</ButtonUI>
            <ButtonUI
              onClick={() => {
                setOpen(false);
              }}
              background="linear-gradient(180deg, #14ff00 0%, #10ce00 100%)"
            >
              취소
            </ButtonUI>
          </BtnListUI>
        </WrapperUI>
      </RudAlert>
    </CenterModalUI>
  );
};

export default DeleteAlert;
