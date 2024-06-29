import { Icon } from "@iconify/react/dist/iconify.js";
import { MenuBtnTextUI, MenuBtnUI } from "./styles";
import SignatureGradients from "../../../../global/signature-gradients";

const MenuBtn = ({ name, iconNm, idx, onClick, href }) => {
  return (
    <MenuBtnUI
      key={idx}
      onClick={onClick}
      background={SignatureGradients[idx % SignatureGradients?.length]}
      href={href}
    >
      <Icon icon={iconNm} height="30%" />
      <MenuBtnTextUI>{name}</MenuBtnTextUI>
    </MenuBtnUI>
  );
};

export default MenuBtn;
