import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { LogoWrapperUI, HeaderUI } from "./styles";

const Header = () => {
  return (
    <HeaderUI>
      <AiOutlineMenu />
      <LogoWrapperUI>
        <img height="80%" src={"/Images/rudkids_logo.webp"} />
      </LogoWrapperUI>
      <IoMdCart />
    </HeaderUI>
  );
};

export default Header;
