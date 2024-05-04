import { useState } from "react";
import { useDeleteShippingMutation } from "../../../../../queries/shipping";
import Popup from "../../../../../shared/Popup";
import {
  ShippingUI,
  ShippingWrapperUI,
  RowWrapperUI,
  CurrentSignUI,
  ShippingNameTextUI,
  ChooseButtonUI,
  ColWrapperUI,
  RecieverNameTextUI,
  RecieverPhoneTextUI,
  AddressTextUI,
  ActionButtonUI,
} from "./styles";
import AddEditShipping from "../../AddEditShipping";

const Shipping = ({ shippingData, isSelected = false, onSelect }) => {
  const deleteShippingMutation = useDeleteShippingMutation(shippingData.id);

  const deleteBtnClickHandler = async () => {
    if (shippingData.isDefault) {
      alert(
        "기본배송지는 삭제 할 수 없습니다. (다른 배송지를 기본배송지로 등록하세요)"
      );
      return;
    }
    await deleteShippingMutation.mutateAsync();
  };

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const editBtnClickHandler = async () => {
    setIsEditPopupOpen(true);
  };

  return (
    <ShippingWrapperUI>
      <ShippingUI isSelected={isSelected}>
        <ColWrapperUI gap="14px">
          <ColWrapperUI gap="4px">
            <RowWrapperUI gap="14px">
              <ShippingNameTextUI isSelected={isSelected}>
                {shippingData.name ?? ""}
              </ShippingNameTextUI>
              {isSelected && <CurrentSignUI>현재 배송지</CurrentSignUI>}
            </RowWrapperUI>
            <RowWrapperUI gap="13px">
              <RecieverNameTextUI>
                {shippingData.recieverName ?? ""}
              </RecieverNameTextUI>
              <RecieverPhoneTextUI>
                {shippingData?.recieverPhoneNumber ?? ""}
              </RecieverPhoneTextUI>
            </RowWrapperUI>
          </ColWrapperUI>
          <ColWrapperUI gap="6px">
            <AddressTextUI>{shippingData.address}</AddressTextUI>
            <AddressTextUI>
              {shippingData.detailAddress ?? "상세주소 없음"}
            </AddressTextUI>
          </ColWrapperUI>
        </ColWrapperUI>
        <RowWrapperUI gap="7px">
          <ActionButtonUI onClick={editBtnClickHandler}>수정</ActionButtonUI>
          <ActionButtonUI onClick={deleteBtnClickHandler}>삭제</ActionButtonUI>
        </RowWrapperUI>
        <ChooseButtonUI
          onClick={() => {
            if (typeof onSelect !== "function") return;
            onSelect();
          }}
          isSelected={isSelected}
        >
          선택
        </ChooseButtonUI>
      </ShippingUI>
      <Popup
        isOpen={isEditPopupOpen}
        setIsOpen={setIsEditPopupOpen}
        popupName="📮 Shipping Edit"
      >
        <AddEditShipping
          shippingData={shippingData}
          onAction={() => setIsEditPopupOpen(false)}
        />
      </Popup>
    </ShippingWrapperUI>
  );
};

export default Shipping;
