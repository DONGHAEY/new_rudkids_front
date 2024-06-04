import { useMemo } from "react";
import {
  CartProductNameUI,
  CartProductPriceUI,
  CartProductUI,
  InfoTextWrapperUI,
  OptionsSectionUI,
  QuantityTextUI,
} from "./styles";

const CartProduct = ({ cartProduct }) => {
  //

  return (
    <CartProductUI>
      <img height="70px" src={cartProduct.thumnail} />
      <InfoTextWrapperUI>
        <CartProductNameUI>{cartProduct.name}</CartProductNameUI>
        <CartProductPriceUI>
          ₩ {cartProduct.price.toLocaleString("ko-KR")}
        </CartProductPriceUI>
        <OptionsSectionUI>
          {cartProduct?.selectedOptions?.map((option) => (
            <p key={option?.id}>
              {option?.groupName}: {option?.optionName}
            </p>
          ))}
        </OptionsSectionUI>
        <QuantityTextUI>{cartProduct.quantity}개</QuantityTextUI>
      </InfoTextWrapperUI>
    </CartProductUI>
  );
};

export default CartProduct;
