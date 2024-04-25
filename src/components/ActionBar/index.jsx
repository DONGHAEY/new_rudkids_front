import { BsCartPlusFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import {
  ActionBarUI,
  ActionBarWrapperUI,
  ActionButtonUI,
  SpacerUI,
} from "./styles";

const ActionBar = () => {
  return (
    <>
      <ActionBarWrapperUI>
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
      </ActionBarWrapperUI>
      <SpacerUI />
    </>
  );
};

export default ActionBar;
