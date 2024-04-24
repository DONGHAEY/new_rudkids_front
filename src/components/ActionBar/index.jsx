import { BsCartPlusFill } from "react-icons/bs";
import { ActionBarUI, ActionButtonUI, SpacerUI } from "./styles";

const ActionBar = () => {
  return (
    <>
      <SpacerUI />
      <ActionBarUI>
        <ActionButtonUI>
          <BsCartPlusFill fontSize="20px" />
          <p>Cart</p>
        </ActionButtonUI>
      </ActionBarUI>
    </>
  );
};

export default ActionBar;
