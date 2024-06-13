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
        {cartProduct?.options?.length !== 0 && (
          <OptionsSectionUI>
            {cartProduct?.options?.map((option) => (
              <p key={option?.id}>
                {option?.groupName}: {option?.name}
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
