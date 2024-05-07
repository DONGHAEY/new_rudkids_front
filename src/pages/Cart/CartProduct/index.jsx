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
    cartProduct?.product.id
  );

  const deleteMutation = useCartProductDeleteMutation(cartProduct?.product.id);

  const quantityClickHandler = async (quantity) => {
    await quantityMutation.mutateAsync(quantity);
  };
  const deleteClickHandler = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      await deleteMutation.mutateAsync();
    }
  };

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
          <QuantityButtonUI
            onClick={() => quantityClickHandler(cartProduct.quantity - 1)}
          >
            <FaMinus />
          </QuantityButtonUI>
          <QuantityTextUI>{cartProduct.quantity}</QuantityTextUI>
          <QuantityButtonUI
            onClick={() => quantityClickHandler(cartProduct.quantity + 1)}
          >
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
