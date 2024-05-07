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
import AddEditShipping from "../AddEditShipping";
import { usePopup } from "../../../../hooks/usePopup";

const SelectShipping = ({ shipping, setShipping }) => {
  const { data: shippingListData } = useShippingListQuery();

  const [popupNavigate, popupBack] = usePopup();

  const addBtnClickHandler = () => {
    popupNavigate("📮 Shipping Add");
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
          {shippingListData?.map((shippingData, idx) => (
            <Shipping
              key={idx}
              shippingData={shippingData}
              isSelected={shipping?.id === shippingData.id}
              onSelect={() => {
                setShipping(shippingData);
              }}
            />
          ))}
        </FlexWrapperUI>
      </ShippingListUI>
      <Popup popupName="📮 Shipping Add">
        <AddEditShipping
          shippingData={null}
          setShippingData={setShippingDataHandler}
        />
      </Popup>
    </ShippingListWrapperUI>
  );
};

export default SelectShipping;
