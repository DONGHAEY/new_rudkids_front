import { Icon } from "@iconify/react/dist/iconify.js";
import { GoToShopUI, MessageUI, ShopBtnUI, SubMessageUI } from "./styles";

const GoToShop = () => {
  return (
    <GoToShopUI>
      <div style={{ marginTop: "-20%" }} />
      <Icon icon="lets-icons:order" fontSize="56px" color="black" />
      <MessageUI>주문내역이 비어있어요</MessageUI>
      <SubMessageUI>루키즈의 상품들을 구경하세요</SubMessageUI>
      <ShopBtnUI to="/shop">Shop</ShopBtnUI>
    </GoToShopUI>
  );
};

export default GoToShop;
