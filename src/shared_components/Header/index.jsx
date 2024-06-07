import {
  LogoIconUI,
  SpacerUI,
  HeaderUI,
  IconLinkUI,
  CartCntTextUI,
  CartTxtUI,
} from "./styles";
import pompomiImgSrc from "./assets/pompomi.png";
import { useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar";
import { useState } from "react";
import { MenuBarModalUI } from "./styles";
import useCartProdsCntQuery from "../../queries/cart/useCartProdsCntQuery";
import Loader from "../../shared_components/Loader";

const Header = ({ isFixed = true }) => {
  const { data: cartCntData = 0, isLoading } = useCartProdsCntQuery();

  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const listBtnClickHandler = () => {
    setMenuBarOpen(true);
  };

  return (
    <>
      <HeaderUI position={isFixed ? "fixed" : "relative"}>
        <IconLinkUI onClick={listBtnClickHandler}>
          <img height="27px" src={pompomiImgSrc} />
        </IconLinkUI>
        <LogoIconUI to="/">
          <img height="100%" src={"/Images/logo.png"} />
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
      {isLoading && <Loader delayMs={500} />}
    </>
  );
};

export default Header;
