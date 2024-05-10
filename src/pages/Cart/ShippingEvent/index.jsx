import { usePopup } from "../../../hooks/usePopup";
import { useSetShippingPriceToZeroMutation } from "../../../queries/cart";
import popupImgSrc from "./assets/popup_message.png";
import { ButtonUI, CenterUI, ShippingEventUI } from "./styles";

const ShippingEvent = () => {
  const [_, closePopup] = usePopup();

  const setShippingPriceZeroMutation = useSetShippingPriceToZeroMutation();
  const isUsed = localStorage.getItem("shipping_event_joined");

  const clickHandler = async (e) => {
    e.stopPropagation();
    try {
      await setShippingPriceZeroMutation.mutateAsync();
      alert("쿠폰적용 할인 성공");
      localStorage.setItem("shipping_event_joined", true);
      closePopup();
    } catch (e) {
      alert("쿠폰 할인 적용에 실패했어요ㅠ");
    }
  };

  return (
    <ShippingEventUI onClick={() => closePopup()}>
      <CenterUI>
        <img src={popupImgSrc} width={"85%"} />
        <ButtonUI
          disabled={isUsed}
          onClick={clickHandler}
          backgroundColor={isUsed ? "gray" : "black"}
        >
          {!isUsed ? "친구 초대하기" : "사용됨"}
        </ButtonUI>
      </CenterUI>
    </ShippingEventUI>
  );
};

export default ShippingEvent;
