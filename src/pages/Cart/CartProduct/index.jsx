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
import { useNavigate } from "react-router-dom";
import useEditCartProductQuantityMutation from "../../../mutations/cart/useEditCartProductQuantityMutation";
import useDeleteCartProductMutation from "../../../mutations/cart/useDeleteCartProductMutation";

const CartProduct = ({ cartProduct }) => {
  const editQuantityMutation = useEditCartProductQuantityMutation(
    cartProduct?.product.id
  );
  const deleteMutation = useDeleteCartProductMutation(cartProduct?.product.id);

  const quantityPlusClickHandler = async (e) => {
    e.stopPropagation();
    await editQuantityMutation.mutateAsync(cartProduct.quantity + 1);
  };
  const quantityMinusClickHandler = async (e) => {
    e.stopPropagation();
    await editQuantityMutation.mutateAsync(cartProduct.quantity - 1);
  };

  const deleteClickHandler = async (e) => {
    e.stopPropagation();
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      await deleteMutation.mutateAsync();
    }
  };

  const navigate = useNavigate();

  const productClickHandler = () => {
    navigate(`/product/${cartProduct.product.name}`);
  };

  return (
    <CartProductUI onClick={productClickHandler}>
      <img height="80px" src={cartProduct.product.thumnail} />
      <WrapperUI>
        <InfoTextWrapperUI>
          <CartProductNameUI>{cartProduct.product.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct.product.price.toLocaleString("ko-KR")}
          </CartProductPriceUI>
        </InfoTextWrapperUI>
        <QuantityGroupUI>
          <QuantityButtonUI onClick={quantityMinusClickHandler}>
            <FaMinus />
          </QuantityButtonUI>
          <QuantityTextUI>{cartProduct.quantity}</QuantityTextUI>
          <QuantityButtonUI onClick={quantityPlusClickHandler}>
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
