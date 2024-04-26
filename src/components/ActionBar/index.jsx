import { BsCartPlusFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import {
  ActionBarUI,
  ActionBarWrapperUI,
  ActionButtonUI,
  SpacerUI,
} from "./styles";
import { useCartProductMutation } from "../../queries/cart";

const ActionBar = ({ productId }) => {
  const putCartProductMutation = useCartProductMutation();

  const cartButtonClickHandler = async () => {
    if (productId) {
      try {
        await putCartProductMutation.mutateAsync(productId);
      } catch (e) {}
    }
  };

  return (
    <>
      <ActionBarWrapperUI>
        <ActionBarUI>
          <ActionButtonUI $backgroundColor={"#001100"}>
            <MdRemoveRedEye fontSize="20px" />
            <p>More</p>
          </ActionButtonUI>
          <ActionButtonUI onClick={cartButtonClickHandler}>
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
