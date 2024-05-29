import SelectShipping from "..";
import { usePopup } from "../../../../hooks/usePopup";
import useDeleteShippingMutation from "../../../../mutations/shipping/useDeleteShippingMutation";
import PopupRoute from "../../../PopupRoute";
import AddEditShipping from "../../AddEditShipping";
import {
  ActionButtonUI,
  AddressTextUI,
  ChooseButtonUI,
  ColWrapperUI,
  CurrentSignUI,
  RecieverNameTextUI,
  RecieverPhoneTextUI,
  RowWrapperUI,
  ShippingNameTextUI,
  ShippingUI,
  ShippingWrapperUI,
} from "./styles";

const Shipping = ({ shippingData, isSelected = false, onSelect, onEdit }) => {
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

  const [popupNavigate, popupBack] = usePopup();

  const editBtnClickHandler = async () => {
    popupNavigate(`shipping-edit-${shippingData.id}`);
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
            onSelect(shippingData);
          }}
          isSelected={isSelected}
        >
          선택
        </ChooseButtonUI>
      </ShippingUI>
      <PopupRoute name={`shipping-edit-${shippingData.id}`}>
        <AddEditShipping
          shippingData={shippingData}
          setShippingData={(shippingData) => {
            onEdit(shippingData);
            popupBack();
          }}
        />
      </PopupRoute>
    </ShippingWrapperUI>
  );
};

export default Shipping;
