import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import {
  LogoWrapperUI,
  SpacerUI,
  HeaderUI,
  IconWrapperUI,
  CartCntTextUI,
} from "./styles";
import { useCartCntQuery } from "../../queries/cart";
import rudkidsLogoSrc from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar";
import { useState } from "react";
import { MenuBarModalUI } from "./styles";

const Header = ({ $backgroundColor = "none", isFixed = true }) => {
  const navigate = useNavigate();
  const { data: cartCntData = 0 } = useCartCntQuery();

  const logoClickHandler = () => {
    navigate("/");
  };

  const cartBtnClickHandler = () => {
    navigate("/cart");
  };

  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const listBtnClickHandler = () => {
    setMenuBarOpen(true);
  };

  return (
    <>
      <HeaderUI position={isFixed ? "fixed" : "relative"}>
        <IconWrapperUI onClick={listBtnClickHandler}>
          <AiOutlineMenu />
        </IconWrapperUI>
        <LogoWrapperUI onClick={logoClickHandler}>
          <img height="100%" src={rudkidsLogoSrc} />
        </LogoWrapperUI>
        <IconWrapperUI onClick={cartBtnClickHandler}>
          <IoMdCart />
          <CartCntTextUI>{cartCntData}</CartCntTextUI>
        </IconWrapperUI>
      </HeaderUI>
      {isFixed && <SpacerUI />}
      <MenuBarModalUI open={menuBarOpen} hideBackdrop disableAutoFocus>
        <MenuBar onClosed={(d) => setMenuBarOpen(false)} />
      </MenuBarModalUI>
    </>
  );
};

export default Header;
