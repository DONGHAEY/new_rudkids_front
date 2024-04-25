import { BsCartPlusFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { ActionBarUI, ActionButtonUI, SpacerUI } from "./styles";

const ActionBar = () => {
  return (
    <>
      <ActionBarUI>
        <ActionButtonUI $backgroundColor={"#001100"}>
          <MdRemoveRedEye fontSize="20px" />
          <p>More</p>
        </ActionButtonUI>
        <ActionButtonUI>
          <BsCartPlusFill fontSize="20px" />
          <p>Cart</p>
        </ActionButtonUI>
      </ActionBarUI>
      <SpacerUI />
    </>
  );
};

export default ActionBar;
