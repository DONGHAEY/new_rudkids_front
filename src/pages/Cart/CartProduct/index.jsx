import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import {
  CartProductNameUI,
  CartProductPriceUI,
  CartProductUI,
  CloseIconWrapperUI,
  InfoTextWrapperUI,
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
      <img height="100%" src={cartProduct.product.imageUrl} />
      <WrapperUI>
        <InfoTextWrapperUI>
          <CartProductNameUI>{cartProduct.product.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct.product.price.toLocaleString("ko-KR")}
          </CartProductPriceUI>
        </InfoTextWrapperUI>
        <QuantityGroupUI>
          <QuantityButtonUI onClick={minusClickHandler}>
            <FaMinus />
          </QuantityButtonUI>
          <QuantityTextUI>{cartProduct.quantity}</QuantityTextUI>
          <QuantityButtonUI onClick={plusClickHandler}>
            <FaPlus />
          </QuantityButtonUI>
        </QuantityGroupUI>
      </WrapperUI>
      <CloseIconWrapperUI onClick={deleteClickHandler}>
        <IoIosClose color="#999999" />
      </CloseIconWrapperUI>
    </CartProductUI>
  );
};

export default CartProduct;
