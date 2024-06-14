import { useNavigate } from "react-router-dom";
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

export const CannotAlert = () => {
  const navigate = useNavigate();
  return (
    <WrapperUI>
      <AlertUI>
        <TitleUI>
          루키즈 카드는
          <br />
          실제로 배송되기에 주문 후 이용해주세요.
        </TitleUI>
        <BtnListUI>
          <BackBtnUI onClick={() => navigate("/shop")}>이동하기</BackBtnUI>
        </BtnListUI>
      </AlertUI>
    </WrapperUI>
  );
};

export default WarningAlert;
