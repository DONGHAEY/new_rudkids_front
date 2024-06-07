import {
  LogoIconUI,
  SpacerUI,
  HeaderUI,
  IconLinkUI,
  CartCntTextUI,
  CartTxtUI,
} from "./styles";
import pompomiImgSrc from "./assets/pompomi.png";
import MenuBar from "./MenuBar";
import { useState } from "react";
import { MenuBarModalUI } from "./styles";
import useCartProdsCntQuery from "../../queries/cart/useCartProdsCntQuery";
import Loader from "../../shared_components/Loader";
import PublicBizAssets from "../../global/public-biz-assets";

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
          <img height="27px" src={pompomiImgSrc} />
        </IconLinkUI>
        <LogoIconUI to="/">
          <img height="100%" src={PublicBizAssets.logo} />
        </LogoIconUI>
        <IconLinkUI to="/cart">
          <CartTxtUI>cart</CartTxtUI>
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
