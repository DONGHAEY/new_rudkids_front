import {
  CartProductNameUI,
  CartProductPriceUI,
  CartProductUI,
  InfoTextWrapperUI,
  QuantityGroupUI,
  QuantityTextUI,
  WrapperUI,
} from "./styles";

const CartProduct = ({ cartProduct }) => {
  return (
    <CartProductUI>
      <img height="80px" src={cartProduct.product.imageUrl} />
      <WrapperUI>
        <InfoTextWrapperUI>
          <CartProductNameUI>{cartProduct.product.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct.product.price.toLocaleString("ko-KR")}
          </CartProductPriceUI>
        </InfoTextWrapperUI>
        <QuantityGroupUI>
          <QuantityTextUI>{cartProduct.quantity}개</QuantityTextUI>
        </QuantityGroupUI>
      </WrapperUI>
    </CartProductUI>
  );
};

export default CartProduct;
