import { BsCartPlusFill } from "react-icons/bs";
import { ActionButtonUI, ActionBarUI } from "./styles";

const ActionBar = ({ disabled = true, onClick, actionName }) => {
  return (
    <>
      <ActionBarUI>
        <ActionButtonUI disabled={disabled} onClick={onClick}>
          <BsCartPlusFill fontSize="20px" />
          <p>{actionName}</p>
        </ActionButtonUI>
      </ActionBarUI>
    </>
  );
};

export default ActionBar;
