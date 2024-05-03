import { useDeleteShippingMutation } from "../../../../../queries/shipping";
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

const Shipping = ({ shippingData, isSelected = false, onSelect }) => {
  const deleteShippingMutation = useDeleteShippingMutation(shippingData.id);

  const deleteBtnClickHandler = async () => {
    if (shippingData.isDefault) {
      alert("기본배송지는 삭제 할 수 없습니다.");
      return;
    }
    await deleteShippingMutation.mutateAsync();
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
          <ActionButtonUI>수정</ActionButtonUI>
          <ActionButtonUI onClick={deleteBtnClickHandler}>삭제</ActionButtonUI>
        </RowWrapperUI>
        <ChooseButtonUI
          onClick={() => {
            if (typeof onSelect !== "function") return;
            console.log("---");
            onSelect();
          }}
          isSelected={isSelected}
        >
          선택
        </ChooseButtonUI>
      </ShippingUI>
    </ShippingWrapperUI>
  );
};

export default Shipping;
