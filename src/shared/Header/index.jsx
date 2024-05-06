import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import {
  LogoWrapperUI,
  HeaderWrapperUI,
  SpacerUI,
  HeaderUI,
  IconWrapperUI,
  CartCntTextUI,
} from "./styles";
import { useCartCntQuery } from "../../queries/cart";
import rudkidsLogoSrc from "./assets/rudkids_logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ $backgroundColor = "none", isFixed = true }) => {
  const navigate = useNavigate();
  const { data: cartCntData = 0 } = useCartCntQuery();

  const logoClickHandler = () => {
    navigate("/");
  };

  const cartBtnClickHandler = () => {
    navigate("/cart");
  };

  const listBtnClickHandler = () => {
    //
  };

  return (
    <>
      <HeaderWrapperUI
        position={isFixed ? "fixed" : "relative"}
        $backgroundColor={$backgroundColor}
      >
        <HeaderUI>
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
      </HeaderWrapperUI>
      {isFixed && <SpacerUI />}
    </>
  );
};

export default Header;
