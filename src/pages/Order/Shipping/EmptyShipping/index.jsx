import { IoMdAdd } from "react-icons/io";
import {
  EmptyShippingUI,
  ExplainTextUI,
  AddButtonUI,
  AddBtnTextUI,
} from "./styles";
import { usePopup } from "../../../../hooks/usePopup";
import Popup from "../../../../shared/Popup";
import AddEditShipping from "../AddEditShipping";

const EmptyShipping = ({ onChange }) => {
  const [popupNavigate, navigateBack] = usePopup();

  const addBtnClickHandler = () => {
    popupNavigate("📮 Shipping Add");
  };

  const setShippingDataHandler = (shippingData) => {
    onChange(shippingData);
    navigateBack();
  };

  return (
    <EmptyShippingUI>
      <ExplainTextUI>배송지를 먼저 입력해주세요</ExplainTextUI>
      <AddButtonUI>
        <IoMdAdd fontSize="18px" />
        <AddBtnTextUI onClick={addBtnClickHandler}>등록하기</AddBtnTextUI>
      </AddButtonUI>
      <Popup popupName="📮 Shipping Add">
        <AddEditShipping
          shippingData={null}
          setShippingData={setShippingDataHandler}
        />
      </Popup>
    </EmptyShippingUI>
  );
};

export default EmptyShipping;
