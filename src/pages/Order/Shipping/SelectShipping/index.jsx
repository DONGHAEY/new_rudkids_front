import { IoMdAdd } from "react-icons/io";
import {
  ShippingListUI,
  ShippingListWrapperUI,
  AddButtonUI,
  FlexWrapperUI,
  AddBtnTextUI,
} from "./styles";
import { useShippingListQuery } from "../../../../queries/shipping";
import Shipping from "./Shipping";
import Popup from "../../../../shared/Popup";
import { useState } from "react";
import AddEditShipping from "../AddEditShipping";

const SelectShipping = ({ shipping, setShipping }) => {
  const { data: shippingListData } = useShippingListQuery();

  const [isOpen, setIsOpen] = useState(false);

  const addBtnClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <ShippingListWrapperUI>
      <ShippingListUI>
        <AddButtonUI onClick={addBtnClickHandler}>
          <IoMdAdd fontSize="20px" />
          <AddBtnTextUI>새 배송지 등록</AddBtnTextUI>
        </AddButtonUI>
        <FlexWrapperUI>
          {shippingListData?.map((shippingData, idx) => {
            return (
              <Shipping
                key={idx}
                shippingData={shippingData}
                isSelected={shipping?.id === shippingData.id}
                onSelect={() => {
                  setShipping(shippingData);
                }}
              />
            );
          })}
        </FlexWrapperUI>
      </ShippingListUI>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} popupName="📮 Shipping Add">
        <AddEditShipping onAction={() => setIsOpen(false)} />
      </Popup>
    </ShippingListWrapperUI>
  );
};

export default SelectShipping;
