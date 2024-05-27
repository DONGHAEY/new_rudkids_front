import { useEffect } from "react";
import {
  AddressTextUI,
  ColWrapperUI,
  EditIconImgUI,
  RecieverNameTextUI,
  RecieverPhoneNumberTextUI,
  RowWrapperUI,
  ShippingNameTextUI,
  ShippingUI,
  ShippingWrapperUI,
} from "./styles";
import editIconSrc from "./assets/edit_icon.png";
import EmptyShipping from "./EmptyShipping";
import { usePopup } from "../../hooks/usePopup";
import SelectShipping from "./SelectShipping";
import Popup from "../Popup";
import useShippingListQuery from "../../queries/shipping/useShippingListQuery";

const Shipping = ({ value, setValue, canEdit = true }) => {
  const { data: shippingListData } = useShippingListQuery();
  const [popupNavigate] = usePopup();

  useEffect(() => {
    if (value) {
      return;
    }
    if (!shippingListData?.length) return;
    const defaultShippingData = shippingListData?.find(
      (shippingData) => shippingData.isDefault === true
    );
    if (defaultShippingData) {
      setValue(defaultShippingData);
    }
  }, [shippingListData, value]);

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
        {canEdit && (
          <EditIconImgUI
            src={editIconSrc}
            alt="edit"
            onClick={editBtnClickHandler}
          />
        )}
      </ShippingUI>
      {canEdit && (
        <Popup popupName="shipping-list" popupTitle="배송지 목록">
          <SelectShipping
            shipping={value}
            setShipping={(shipipngData) => setValue(shipipngData)}
          />
        </Popup>
      )}
    </ShippingWrapperUI>
  );
};

export default Shipping;
