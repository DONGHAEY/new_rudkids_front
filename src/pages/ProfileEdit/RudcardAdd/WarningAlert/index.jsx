import {
  WrapperUI,
  AlertUI,
  TitleUI,
  BtnListUI,
  BackBtnUI,
  SaveBtnUI,
} from "./styles";

const WarningAlert = ({ onConfirm, onCancel }) => {
  return (
    <WrapperUI>
      <AlertUI>
        <TitleUI>
          루키즈 카드에 입력한 정보를 저장하면
          <br />
          수정을 할 수 없어요. 저장할까요?
        </TitleUI>
        <BtnListUI>
          <BackBtnUI onClick={onCancel}>뒤로가기</BackBtnUI>
          <SaveBtnUI onClick={onConfirm}>저장</SaveBtnUI>
        </BtnListUI>
      </AlertUI>
    </WrapperUI>
  );
};

export default WarningAlert;
