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
import { setOrderingProducts } from "../../CreateOrder";
import { useNavigate } from "react-router-dom";

const ActionBar = ({ productData }) => {
  const [actionName, setActionName] = useState();
  const [selectOptionModal, setSelectOptionModal] = useState(false);
  const [putCartSuccessModal, setPutCartSuccessModal] = useState(false);
  const putCartProductMutation = useAddCartProductMutation();

  const navigate = useNavigate();

  const addToCartHandler = async (options = [], quantity) => {
    if (productData?.optionGroups?.length !== 0 && !options?.length) {
      setSelectOptionModal(true);
      return;
    }
    try {
      await putCartProductMutation.mutateAsync(
        {
          productId: productData.id,
          optionIds: options?.map((option) => option.id) ?? [],
          quantity: quantity,
        },
        {
          onSuccess: () => {
            trackAction("add to cart", productData, options);
            setPutCartSuccessModal(true);
          },
        }
      );
    } catch (e) {}
  };

  const buyNowHandler = (options, quantity) => {
    trackAction("buy now", productData, options);
    const orderingProduct = {
      name: productData.name,
      price: productData.price,
      productId: productData.id,
      category: productData.category,
      price: productData.price,
      thumnail: productData.thumnail,
      quantity: quantity,
      options: options?.map((option) => {
        return {
          id: option.id,
          groupName: option.groupName,
          name: option.name,
          price: option.price,
        };
      }),
    };
    setOrderingProducts([orderingProduct]);
    navigate("/create-order?type=buy now");
  };

  const optionSelectedHandler = (options, quantity) => {
    if (actionName === "cart") {
      addToCartHandler(options, quantity);
    } else if (actionName === "buy now") {
      buyNowHandler(options, quantity);
    }
  };

  return (
    <>
      <ActionBarWrapperUI>
        <ActionBarUI>
          <ActionButtonUI
            onClick={() => {
              setSelectOptionModal(true);
              setActionName("cart");
            }}
            $backgroundColor="black"
            $color="white"
          >
            <BsCartPlusFill fontSize="23px" />
            <p>Cart</p>
          </ActionButtonUI>
          <ActionButtonUI
            onClick={() => {
              setSelectOptionModal(true);
              setActionName("buy now");
            }}
          >
            <p>BuyNow</p>
          </ActionButtonUI>
        </ActionBarUI>
      </ActionBarWrapperUI>
      <SelectModal
        open={selectOptionModal}
        onClose={() => setSelectOptionModal(false)}
        actionName={actionName}
        optionGroups={productData?.optionGroups}
        onSelected={optionSelectedHandler}
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

const trackAction = (actionName, productData, options) => {
  let { id: product_id, name: product_name, category, price } = productData;
  let optionObj = {};
  options?.map((option) => {
    price += option.price;
    optionObj[option.groupName] = option.name;
  });
  track(actionName, {
    product_id,
    product_name,
    category,
    price,
    ...optionObj,
  });
};

export default ActionBar;
