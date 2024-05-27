import { IoMdAdd } from "react-icons/io";
import {
  ShippingListUI,
  ShippingListWrapperUI,
  AddButtonUI,
  FlexWrapperUI,
  AddBtnTextUI,
} from "./styles";
import Shipping from "./Shipping";
import Popup from "../../Popup";
import AddEditShipping from "../AddEditShipping";
import { usePopup } from "../../../hooks/usePopup";
import useShippingListQuery from "../../../queries/shipping/useShippingListQuery";

const SelectShipping = ({ shipping, setShipping }) => {
  const { data: shippingListData } = useShippingListQuery();

  const [popupNavigate, popupBack] = usePopup();

  const addBtnClickHandler = () => {
    popupNavigate("shipping-add");
  };

  const setShippingDataHandler = (shippingData) => {
    popupBack();
  };

  return (
    <ShippingListWrapperUI>
      <ShippingListUI>
        <AddButtonUI onClick={addBtnClickHandler}>
          <IoMdAdd fontSize="20px" />
          <AddBtnTextUI>새 배송지 등록</AddBtnTextUI>
        </AddButtonUI>
        <FlexWrapperUI>
          {shippingListData?.map((shipping_, idx) => {
            const isSelected = shipping?.id === shipping_.id;
            return (
              <Shipping
                key={idx}
                shippingData={shipping_}
                isSelected={isSelected}
                onSelect={() => {
                  setShipping(shipping_);
                }}
                onEdit={(editedShippingData) => {
                  if (isSelected) {
                    setShipping(editedShippingData);
                  }
                }}
              />
            );
          })}
        </FlexWrapperUI>
      </ShippingListUI>
      <Popup popupName="shipping-add" popupTitle="📮 Shipping Add">
        <AddEditShipping
          shippingData={null}
          setShippingData={setShippingDataHandler}
        />
      </Popup>
    </ShippingListWrapperUI>
  );
};

export default SelectShipping;
