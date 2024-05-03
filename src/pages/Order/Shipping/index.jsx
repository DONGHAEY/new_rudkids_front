import { useEffect, useState } from "react";
import Popup from "../../../shared/Popup";
import SelectShipping from "./SelectShipping";
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

const Shipping = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: shippingListData } = useShippingListQuery();

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

  if (!value) {
    return <EmptyShipping setValue={setValue} />;
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
          onClick={() => setIsOpen(true)}
        />
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} popupName="배송지 목록">
          <SelectShipping
            shipping={value}
            setShipping={(shipipngData) => {
              setIsOpen(false);
              if (typeof setValue !== "function") return;
              setValue({ ...shipipngData, requestMemo: "" });
            }}
          />
        </Popup>
      </ShippingUI>
    </ShippingWrapperUI>
  );
};

export default Shipping;
