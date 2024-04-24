import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { LogoWrapperUI, HeaderWrapperUI, SpacerUI, HeaderUI } from "./styles";

const Header = ({ $backgroundColor = "none" }) => {
  return (
    <>
      <HeaderWrapperUI $backgroundColor={$backgroundColor}>
        <HeaderUI>
          <AiOutlineMenu />
          <LogoWrapperUI>
            <img height="100%" src={"/Images/rudkids_logo.webp"} />
          </LogoWrapperUI>
          <IoMdCart />
        </HeaderUI>
      </HeaderWrapperUI>
      <SpacerUI />
    </>
  );
};

export default Header;
