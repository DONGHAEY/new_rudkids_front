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
import { track } from "@amplitude/analytics-browser";

const ActionBar = ({ productData }) => {
  const navigate = useNavigate();
  const [selectOptionModal, setSelectOptionModal] = useState(false);
  const [putCartSuccessModal, setPutCartSuccessModal] = useState(false);
  const putCartProductMutation = useAddCartProductMutation();

  const cartButtonClickHandler = async (options = []) => {
    //
    if (productData?.optionGroups?.length !== 0 && !options?.length) {
      setSelectOptionModal(true);
      return;
    }
    try {
      await putCartProductMutation.mutateAsync(
        {
          productId: productData.id,
          optionIds: options?.map((option) => option.id),
        },
        {
          onSuccess: () => {
            let {
              id: product_id,
              name: product_name,
              type,
              price,
            } = productData;

            let optionObj = {};
            options?.map((option) => {
              price += option.price;
              optionObj[option.groupName] = option.name;
            });

            track("add to cart", {
              product_id,
              product_name,
              type,
              price,
              ...optionObj,
            });
            setPutCartSuccessModal(true);
          },
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
        onSelected={async (options) => {
          await cartButtonClickHandler(options);
        }}
      />
      <PutCartSuccessModal
        productData={productData}
        isOpen={putCartSuccessModal}
        onClose={() => setPutCartSuccessModal(false)}
      />
      <SpacerUI />
    </>
  );
};

export default ActionBar;
