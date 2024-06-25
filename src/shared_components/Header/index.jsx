import {
  LogoIconUI,
  SpacerUI,
  HeaderUI,
  IconLinkUI,
  CartCntTextUI,
} from "./styles";
import MenuBar from "./MenuBar";
import { useState } from "react";
import { MenuBarModalUI } from "./styles";
import useCartProdsCntQuery from "../../queries/cart/useCartProdsCntQuery";
import Loader from "../../shared_components/Loader";
import PublicBizAssets from "../../global/public-biz-assets";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = ({ isFixed = true }) => {
  const { data: cartCntData = 0, isLoading } = useCartProdsCntQuery();

  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const listBtnClickHandler = () => {
    setMenuBarOpen(true);
  };

  if (isLoading) {
    return <Loader delayMs={250} />;
  }

  return (
    <>
      <HeaderUI position={isFixed ? "fixed" : "relative"}>
        <IconLinkUI onClick={listBtnClickHandler}>
          <Icon icon="material-symbols:menu" color="black" />
        </IconLinkUI>
        <LogoIconUI to="/home">
          <img height="100%" src={PublicBizAssets.logo} />
        </LogoIconUI>
        <IconLinkUI to="/cart">
          <Icon icon="mdi:cart" color="black" />
          {/* </CartTxtUI> */}
          <CartCntTextUI>{cartCntData}</CartCntTextUI>
        </IconLinkUI>
      </HeaderUI>
      {isFixed && <SpacerUI />}
      <MenuBarModalUI open={menuBarOpen} hideBackdrop disableAutoFocus>
        <MenuBar onClosed={(d) => setMenuBarOpen(false)} />
      </MenuBarModalUI>
    </>
  );
};

export default Header;
