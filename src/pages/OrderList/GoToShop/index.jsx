import { Icon } from "@iconify/react/dist/iconify.js";
import { GoToShopUI, MessageUI, ShopBtnUI, SubMessageUI } from "./styles";

const GoToShop = () => {
  return (
    <GoToShopUI>
      <Icon icon="lets-icons:order" fontSize="56px" color="black" />
      <MessageUI>주문내역이 비어있어요</MessageUI>
      <SubMessageUI>루키즈의 상품을 얼른 사세요티비</SubMessageUI>
      <ShopBtnUI to="/shop">Shop</ShopBtnUI>
    </GoToShopUI>
  );
};

export default GoToShop;
