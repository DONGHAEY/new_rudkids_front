import { BsCartPlusFill } from "react-icons/bs";
import {
  ActionBarUI,
  ActionBarWrapperUI,
  ActionButtonUI,
  SpacerUI,
} from "./styles";
import useAddCartProductMutation from "../../../mutations/cart/useAddCartProductMutation";
import { useState } from "react";
import SelectModal from "./SelectModal";
import PutCartSuccessModal from "./PutCartSuccess";
import { track } from "@amplitude/analytics-browser";

const ActionBar = ({ productData }) => {
  const [selectOptionModal, setSelectOptionModal] = useState(false);
  const [putCartSuccessModal, setPutCartSuccessModal] = useState(false);
  const putCartProductMutation = useAddCartProductMutation();

  const cartButtonClickHandler = async (options = []) => {
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
              category,
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
              category,
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

  return (
    <>
      <ActionBarWrapperUI>
        <ActionBarUI>
          <ActionButtonUI onClick={cartButtonClickHandler}>
            <BsCartPlusFill fontSize="25px" />
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
