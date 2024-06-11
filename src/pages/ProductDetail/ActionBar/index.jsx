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
import PutCartSuccessModal from "./PutCartSuccess";

const ActionBar = ({ productData }) => {
  const navigate = useNavigate();
  const [selectOptionModal, setSelectOptionModal] = useState(false);
  const [putCartSuccessModal, setPutCartSuccessModal] = useState(false);
  const putCartProductMutation = useAddCartProductMutation();

  const cartButtonClickHandler = async (optionIds = []) => {
    console.log(productData?.optionGroups?.length, optionIds?.length, "--");
    if (productData?.optionGroups?.length !== 0 && !optionIds?.length) {
      setSelectOptionModal(true);
      return;
    }
    try {
      await putCartProductMutation.mutateAsync(
        { productId: productData.id, optionIds },
        {
          onSuccess: () => setPutCartSuccessModal(true),
        }
      );
    } catch (e) {}
    return;
  };

  const moreButtonClickHandler = async () => {
    if (productData) {
      navigate(`/product/${productData?.name}/story`);
    }
  };

  const hasStoryPage = productData?.type === "toy";

  return (
    <>
      <ActionBarWrapperUI>
        <ActionBarUI>
          {hasStoryPage && (
            <ActionButtonUI
              $backgroundColor={"#001100"}
              onClick={moreButtonClickHandler}
            >
              <MdRemoveRedEye fontSize="20px" />
              <p>Story</p>
            </ActionButtonUI>
          )}
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
          await cartButtonClickHandler(optionIds);
        }}
      />
      <PutCartSuccessModal
        productData={productData}
        isOpen={putCartSuccessModal}
        onClose={() => setPutCartSuccessModal(false)}
      ></PutCartSuccessModal>
      <SpacerUI />
    </>
  );
};

export default ActionBar;
