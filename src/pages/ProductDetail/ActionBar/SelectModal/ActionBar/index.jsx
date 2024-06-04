import { BsCartPlusFill } from "react-icons/bs";
import { CartButtonUI, ActionBarUI, SpacerUI } from "./styles";

const ActionBar = ({ disabled = true, onCartClick }) => {
  return (
    <>
      <ActionBarUI>
        <CartButtonUI disabled={disabled} onClick={onCartClick}>
          <BsCartPlusFill fontSize="20px" />
          <p>Cart</p>
        </CartButtonUI>
      </ActionBarUI>
    </>
  );
};

export default ActionBar;
