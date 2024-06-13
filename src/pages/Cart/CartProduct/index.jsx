import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import {
  CartProductNameUI,
  CartProductPriceUI,
  CartProductUI,
  CloseIconWrapperUI,
  InfoTextWrapperUI,
  OptionsSectionUI,
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
    cartProduct?.id
  );
  const deleteMutation = useDeleteCartProductMutation(cartProduct?.id);

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
    navigate(`/product/${cartProduct.name}`);
  };

  return (
    <CartProductUI onClick={productClickHandler}>
      <img height="80px" src={cartProduct.thumnail} />
      <WrapperUI>
        <InfoTextWrapperUI>
          <CartProductNameUI>{cartProduct.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct?.price?.toLocaleString("ko-KR")}
          </CartProductPriceUI>
          {cartProduct?.options?.length !== 0 && (
            <OptionsSectionUI>
              {cartProduct?.options?.map((option) => {
                return (
                  <p key={option?.id}>
                    {option.groupName} : {option.name}
                  </p>
                );
              })}
            </OptionsSectionUI>
          )}
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
