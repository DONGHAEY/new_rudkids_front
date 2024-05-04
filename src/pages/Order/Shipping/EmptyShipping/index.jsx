import { IoMdAdd } from "react-icons/io";
import {
  EmptyShippingUI,
  ExplainTextUI,
  AddButtonUI,
  AddBtnTextUI,
} from "./styles";
import Popup from "../../../../shared/Popup";
import SelectShipping from "../SelectShipping";
import { useState } from "react";

const EmptyShipping = ({ setValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const addBtnClickHandler = () => {
    setIsOpen(true);
  };

  const setShippingHandler = (shippingData) => {
    setIsOpen(false);
    if (typeof setValue !== "function") return;
    setValue(shippingData);
  };

  return (
    <EmptyShippingUI>
      <ExplainTextUI>배송지를 먼저 입력해주세요</ExplainTextUI>
      <AddButtonUI>
        <IoMdAdd fontSize="18px" />
        <AddBtnTextUI onClick={addBtnClickHandler}>등록하기</AddBtnTextUI>
      </AddButtonUI>
      <Popup isOpen={isOpen}>
        <SelectShipping setShipping={setShippingHandler} />
      </Popup>
    </EmptyShippingUI>
  );
};

export default EmptyShipping;
