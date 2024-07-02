import { BsCartPlusFill } from "react-icons/bs";
import { ActionBarUI, ActionBarWrapperUI, ActionButtonUI } from "./styles";
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const putCartProductMutation = useAddCartProductMutation();
  const navigate = useNavigate();

  const addToCartHandler = async (selectedProduct) => {
    await putCartProductMutation
      .mutateAsync({
        productId: selectedProduct.id,
        optionIds: selectedProduct?.options?.map((option) => option.id) ?? [],
        quantity: selectedProduct.quantity,
      })
      .then(() => {
        trackAction("add to cart", selectedProduct);
        setPutCartSuccessModal(true);
      });
  };

  const buyNowHandler = (selectedProduct) => {
    trackAction("buy now", selectedProduct);
    setOrderingProducts([selectedProduct]);
    navigate("/create-order?type=buy now");
  };

  const optionSelectedHandler = (options, quantity) => {
    const selectedProduct = {
      id: productData.id,
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
    setSelectedProduct(selectedProduct);
    if (actionName === "cart") {
      addToCartHandler(selectedProduct);
    } else if (actionName === "buy now") {
      buyNowHandler(selectedProduct);
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
            <BsCartPlusFill fontSize="140%" />
            <p>Cart</p>
          </ActionButtonUI>
          <ActionButtonUI
            onClick={() => {
              setSelectOptionModal(true);
              setActionName("buy now");
            }}
          >
            <p>Buy Now</p>
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
        selectedProduct={selectedProduct}
        isOpen={putCartSuccessModal}
        onClose={() => setPutCartSuccessModal(false)}
      />
    </>
  );
};

const trackAction = (actionName, selectedProduct) => {
  let {
    id: product_id,
    name: product_name,
    category,
    price,
    options,
    quantity,
  } = selectedProduct;
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
    quantity,
    ...optionObj,
  });
};

export default ActionBar;
