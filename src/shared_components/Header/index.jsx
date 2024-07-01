import {
  LogoIconUI,
  HeaderUI,
  IconLinkUI,
  CartCntTextUI,
  IconUI,
} from "./styles";
import MenuBar from "./MenuBar";
import { useState } from "react";
import { MenuBarModalUI } from "./styles";
import useCartProdsCntQuery from "../../queries/cart/useCartProdsCntQuery";
import PublicBizAssets from "../../global/public-biz-assets";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = ({ isFixed = true, color = "white" }) => {
  const { data: cartCntData = 0, isLoading } = useCartProdsCntQuery();

  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const listBtnClickHandler = () => setMenuBarOpen(true);

  return (
    <>
      <HeaderUI position={isFixed ? "sticky" : "relative"}>
        <IconUI onClick={listBtnClickHandler}>
          <Icon icon="material-symbols:menu" color={color} />
        </IconUI>
        <LogoIconUI to="/home">
          <img width="100%" src={PublicBizAssets.logo} />
        </LogoIconUI>
        <IconLinkUI to="/cart">
          <Icon icon="mdi:cart" color={color} />
          <CartCntTextUI>{cartCntData}</CartCntTextUI>
        </IconLinkUI>
      </HeaderUI>
      <MenuBarModalUI open={menuBarOpen} disableAutoFocus>
        <MenuBar onClosed={(d) => setMenuBarOpen(false)} />
      </MenuBarModalUI>
    </>
  );
};

export default Header;
