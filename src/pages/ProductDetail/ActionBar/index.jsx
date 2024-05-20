import { BsCartPlusFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import {
  ActionBarUI,
  ActionBarWrapperUI,
  ActionButtonUI,
  SpacerUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useAddCartProductMutation from "../../../mutations/cart/useAddCartProductMutation";

const ActionBar = ({ productData }) => {
  const navigate = useNavigate();
  const addCartProductMutation = useAddCartProductMutation();

  const cartButtonClickHandler = async () => {
    if (productData) {
      try {
        await addCartProductMutation.mutateAsync(productData.id);
      } catch (e) {}
    }
  };

  const moreButtonClickHandler = async () => {
    if (productData) {
      navigate(`/product/${productData?.name}/story`);
    }
  };

  return (
    <>
      <ActionBarWrapperUI>
        <ActionBarUI>
          <ActionButtonUI
            $backgroundColor={"#001100"}
            onClick={moreButtonClickHandler}
          >
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
