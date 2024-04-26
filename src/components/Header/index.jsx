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
import { useNavigate } from "react-router-dom";

const Header = ({ $backgroundColor = "none" }) => {
  const navigate = useNavigate();
  const { data: cartCntData = 0 } = useCartCntQuery();

  const logoClickHandler = () => {
    navigate("/list");
  };

  const cartBtnClickHandler = () => {
    navigate("/cart");
  };

  const listBtnClickHandler = () => {
    //
  };

  return (
    <>
      <HeaderWrapperUI $backgroundColor={$backgroundColor}>
        <HeaderUI>
          <IconWrapperUI onClick={listBtnClickHandler}>
            <AiOutlineMenu />
          </IconWrapperUI>
          <LogoWrapperUI onClick={logoClickHandler}>
            <img height="100%" src={"/Images/rudkids_logo.webp"} />
          </LogoWrapperUI>
          <IconWrapperUI onClick={cartBtnClickHandler}>
            <IoMdCart />
            <CartCntTextUI>{cartCntData}</CartCntTextUI>
          </IconWrapperUI>
        </HeaderUI>
      </HeaderWrapperUI>
      <SpacerUI />
    </>
  );
};

export default Header;
