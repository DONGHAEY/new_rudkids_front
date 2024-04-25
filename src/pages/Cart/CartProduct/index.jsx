import { IoIosClose } from "react-icons/io";
import {
  CartProductNameUI,
  CartProductPriceUI,
  CartProductUI,
  CloseIconWrapperUI,
  QuantityButtonUI,
  QuantityGroupUI,
  QuantityTextUI,
  WrapperUI,
} from "./styles";
import {
  useCartProductDeleteMutation,
  useCartProductQuantityMutation,
} from "../../../queries/cart";

const CartProduct = ({ cartProduct }) => {
  const quantityMutation = useCartProductQuantityMutation(
    cartProduct.product.id
  );
  const deleteMutation = useCartProductDeleteMutation(cartProduct.product.id);

  const plusClickHandler = async () => {
    await quantityMutation.mutateAsync(cartProduct.quantity + 1);
  };

  const minusClickHandler = async () => {
    await quantityMutation.mutateAsync(cartProduct.quantity - 1);
  };

  const deleteClickHandler = async () => {
    await deleteMutation.mutateAsync();
  };

  return (
    <CartProductUI>
      <img height={"100%"} src={cartProduct.product.imageUrl} />
      <WrapperUI>
        <div>
          <CartProductNameUI>{cartProduct.product.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct.product.price.toLocaleString("ko-KR")}
          </CartProductPriceUI>
        </div>
        <QuantityGroupUI>
          <QuantityButtonUI onClick={minusClickHandler}>-</QuantityButtonUI>
          <QuantityTextUI>{cartProduct.quantity}</QuantityTextUI>
          <QuantityButtonUI onClick={plusClickHandler}>+</QuantityButtonUI>
        </QuantityGroupUI>
      </WrapperUI>
      <CloseIconWrapperUI onClick={deleteClickHandler}>
        <IoIosClose />
      </CloseIconWrapperUI>
    </CartProductUI>
  );
};

export default CartProduct;
