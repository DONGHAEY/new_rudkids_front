import { BsCartPlusFill } from "react-icons/bs";
import { CartButtonUI, ActionBarUI, SpacerUI } from "./styles";

const ActionBar = ({ disabled = true, onClick, actionName }) => {
  return (
    <>
      <ActionBarUI>
        <CartButtonUI disabled={disabled} onClick={onClick}>
          <BsCartPlusFill fontSize="20px" />
          <p>{actionName}</p>
        </CartButtonUI>
      </ActionBarUI>
    </>
  );
};

export default ActionBar;
