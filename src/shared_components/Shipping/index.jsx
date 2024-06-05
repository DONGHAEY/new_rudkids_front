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
import PopupRoute from "../../shared_components/PopupRoute";
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
          <AddressTextUI>
            {value.address + " " + value.detailAddress}
          </AddressTextUI>
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
        <PopupRoute name="shipping-list">
          <SelectShipping
            shipping={value}
            setShipping={(shipipngData) => setValue(shipipngData)}
          />
        </PopupRoute>
      )}
    </ShippingWrapperUI>
  );
};

export default Shipping;
