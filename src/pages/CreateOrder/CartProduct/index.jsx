import {
  CartProductNameUI,
  CartProductPriceUI,
  CartProductUI,
  OptionsSectionUI,
  QuantityTextUI,
  FlexColUI,
} from "./styles";

const CartProduct = ({ cartProduct }) => {
  //

  const selectedOptions = cartProduct?.selectedOptions;
  return (
    <CartProductUI>
      <img height="80px" src={cartProduct.thumnail} />
      <FlexColUI gap="9px">
        <FlexColUI gap="5px">
          <CartProductNameUI>{cartProduct.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct.price.toLocaleString("ko-KR")}
          </CartProductPriceUI>
        </FlexColUI>
        {selectedOptions?.length !== 0 && (
          <OptionsSectionUI>
            {selectedOptions?.map((option) => (
              <p key={option?.id}>
                {option?.groupName}: {option?.optionName}
              </p>
            ))}
          </OptionsSectionUI>
        )}
        <QuantityTextUI>{cartProduct.quantity}개</QuantityTextUI>
      </FlexColUI>
    </CartProductUI>
  );
};

export default CartProduct;
