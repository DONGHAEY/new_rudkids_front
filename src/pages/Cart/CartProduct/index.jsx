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
  ProductImgUI,
  QuantityButtonUI,
  QuantityGroupUI,
  QuantityTextUI,
  WrapperUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useEditCartProductQuantityMutation from "../../../mutations/cart/useEditCartProductQuantityMutation";
import useDeleteCartProductMutation from "../../../mutations/cart/useDeleteCartProductMutation";
import RudImage from "../../../shared_components/RudImage";
import { useMemo } from "react";

const CartProduct = ({ cartProduct }) => {
  const navigate = useNavigate();

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
    if (window.confirm("정말로 삭제하겠어?..")) {
      await deleteMutation.mutateAsync();
    }
  };

  const productClickHandler = () => navigate(`/product/${cartProduct.name}`);

  const optionsTxt = useMemo(() => {
    let optionsTxt = "";
    cartProduct?.options?.forEach((option, idx) => {
      const isLast = idx === cartProduct.options.length - 1;
      optionsTxt += `${option.groupName} : ${option.name}${
        !isLast ? "&ensp;" : ""
      }`;
    });
    return optionsTxt;
  }, [cartProduct?.options]);

  return (
    <CartProductUI onClick={productClickHandler}>
      <RudImage ImgUI={ProductImgUI} src={cartProduct.thumnail} />
      <WrapperUI>
        <InfoTextWrapperUI>
          <CartProductNameUI>{cartProduct.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {cartProduct?.price?.toLocaleString("ko-KR")}
          </CartProductPriceUI>
          {optionsTxt && (
            <OptionsSectionUI
              dangerouslySetInnerHTML={{
                __html: optionsTxt,
              }}
            />
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
