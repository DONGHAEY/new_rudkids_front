import { BsCartPlusFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import {
  ActionBarUI,
  ActionBarWrapperUI,
  ActionButtonUI,
  SpacerUI,
} from "./styles";
import useAddCartProductMutation from "../../../mutations/cart/useAddCartProductMutation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SelectModal from "./SelectModal";

const ActionBar = ({ productData }) => {
  const navigate = useNavigate();
  const [selectOptionModal, setSelectOptionModal] = useState(false);
  const putCartProductMutation = useAddCartProductMutation();

  const cartButtonClickHandler = async () => {
    if (productData?.optionGroups?.length === 0) {
      try {
        await putCartProductMutation.mutateAsync({ productId: productData.id });
      } catch (e) {}
      return;
    } else {
      setSelectOptionModal(true);
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
      <SelectModal
        open={selectOptionModal}
        onClose={() => setSelectOptionModal(false)}
        optionGroups={productData?.optionGroups}
        onSelected={async (optionIds) => {
          await putCartProductMutation.mutateAsync({
            productId: productData.id,
            optionIds,
          });
        }}
      />
      <SpacerUI />
    </>
  );
};

export default ActionBar;
