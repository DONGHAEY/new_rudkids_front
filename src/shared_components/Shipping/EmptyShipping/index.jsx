import { IoMdAdd } from "react-icons/io";
import {
  EmptyShippingUI,
  ExplainTextUI,
  AddButtonUI,
  AddBtnTextUI,
} from "./styles";
import { usePopup } from "../../../hooks/usePopup";
import PopupRoute from "../../PopupRoute";
import AddEditShipping from "../AddEditShipping";

const EmptyShipping = ({ onChange }) => {
  const [popupNavigate, navigateBack] = usePopup();

  const addBtnClickHandler = () => {
    popupNavigate("shipping-add");
  };

  const setShippingDataHandler = (shippingData) => {
    onChange(shippingData);
    navigateBack();
  };

  return (
    <EmptyShippingUI>
      <ExplainTextUI>배송지를 먼저 입력해주세요</ExplainTextUI>
      <AddButtonUI onClick={addBtnClickHandler}>
        <IoMdAdd fontSize="clamp(0rem, 7vw, 1rem)" />
        <AddBtnTextUI>&nbsp;등록하기</AddBtnTextUI>
      </AddButtonUI>
      <PopupRoute name="shipping-add">
        <AddEditShipping
          shippingData={null}
          setShippingData={setShippingDataHandler}
        />
      </PopupRoute>
    </EmptyShippingUI>
  );
};

export default EmptyShipping;
