import { useEffect } from "react";
import {
  AddressTextUI,
  ColWrapperUI,
  EditIconImgUI,
  RecieverNameTextUI,
  RecieverPhoneNumberTextUI,
  RowWrapperUI,
  SelectUI,
  ShippingNameTextUI,
  ShippingUI,
  ShippingWrapperUI,
} from "./styles";
import editIconSrc from "./assets/edit_icon.png";
import EmptyShipping from "./EmptyShipping";
import { useShippingListQuery } from "../../../queries/shipping";
import { usePopup } from "../../../hooks/usePopup";
import SelectShipping from "./SelectShipping";
import Popup from "../../../shared/Popup";

const Shipping = ({ value, setValue }) => {
  const { data: shippingListData } = useShippingListQuery();
  const [popupNavigate, popupBack] = usePopup();

  useEffect(() => {
    if (!shippingListData?.length) return;
    const defaultShippingData = shippingListData?.find(
      (shippingData) => shippingData.isDefault === true
    );
    if (defaultShippingData) {
      setValue(defaultShippingData);
    }
  }, [shippingListData]);

  const requesetMemoContents = [
    "문앞에 놓아주세요",
    "경비실 앞에 놓아주세요",
    "그렇게해주세요",
  ];

  const editBtnClickHandler = () => {
    popupNavigate("shipping-list");
  };

  if (!value) {
    return <EmptyShipping onChange={setValue} />;
  }

  return (
    <ShippingWrapperUI>
      <ShippingUI>
        <ColWrapperUI gap="8px">
          <ShippingNameTextUI>{value?.name}</ShippingNameTextUI>
          <RowWrapperUI gap="13px">
            <RecieverNameTextUI>{value.recieverName}</RecieverNameTextUI>
            <RecieverPhoneNumberTextUI>
              {value.recieverPhoneNumber}
            </RecieverPhoneNumberTextUI>
          </RowWrapperUI>
        </ColWrapperUI>
        <ColWrapperUI gap="6px">
          <AddressTextUI>{value.address}</AddressTextUI>
          <AddressTextUI>{value.detailAddress}</AddressTextUI>
        </ColWrapperUI>
        <SelectUI
          value={value?.requestMemo ?? ""}
          onChange={(e) => {
            setValue({
              ...value,
              requestMemo: e.target.value,
            });
          }}
        >
          <option key={-1} value={""}>
            배송메모를 선택해주세요
          </option>
          {requesetMemoContents?.map((requestMemo, idx) => (
            <option key={idx} value={requestMemo}>
              {requestMemo}
            </option>
          ))}
        </SelectUI>
        <EditIconImgUI
          src={editIconSrc}
          alt="edit"
          onClick={editBtnClickHandler}
        />
      </ShippingUI>
      <Popup popupName="shipping-list" popupTitle="배송지 목록">
        <SelectShipping
          shipping={value}
          setShipping={(shipipngData) => {
            setValue({ ...shipipngData, requestMemo: "" });
            popupBack();
          }}
        />
      </Popup>
    </ShippingWrapperUI>
  );
};

export default Shipping;
