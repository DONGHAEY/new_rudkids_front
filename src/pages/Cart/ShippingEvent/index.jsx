import { usePopup } from "../../../hooks/usePopup";
import useEditShippingPriceToZeroMutation from "../../../mutations/cart/useEditShippingPriceToZeroMutation";
import useUserQuery from "../../../queries/user/useUserQuery";
import popupImgSrc from "./assets/popup_message.png";
import { ButtonUI, CenterUI, ShippingEventUI } from "./styles";

const ShippingEvent = () => {
  const [_, closePopup] = usePopup();

  const setShippingPriceZeroMutation = useEditShippingPriceToZeroMutation();
  const isUsed = localStorage.getItem("shipping_event_joined");
  const { data: userData } = useUserQuery();

  const clickHandler = async (e) => {
    e.stopPropagation();
    try {
      await window.navigator.share({
        title: "일상속의 작은 재미의 상점 - Rudkids",
        text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요! 지금 가입하면 배송비무료?!",
        url: `https://www.rud.kids/invitation/${userData.id}?shipping_event_join=1`,
      });
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
