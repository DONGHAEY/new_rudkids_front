import {
  CartProductNameUI,
  CartProductPriceUI,
  OrderProductUI,
  InfoTextWrapperUI,
  QuantityGroupUI,
  QuantityTextUI,
  WrapperUI,
  GoProductUI,
  OptionsSectionUI,
} from "./styles";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderProduct = ({ orderProduct }) => {
  const navigate = useNavigate();
  return (
    <OrderProductUI>
      <img height="80px" src={orderProduct.thumnail} />
      <WrapperUI>
        <InfoTextWrapperUI>
          <CartProductNameUI>{orderProduct.name}</CartProductNameUI>
          <CartProductPriceUI>
            ₩ {orderProduct.price.toLocaleString("ko-KR")}
          </CartProductPriceUI>
        </InfoTextWrapperUI>
        <OptionsSectionUI>
          {orderProduct?.options?.map((option) => (
            <p key={option?.id}>
              {option?.groupName}: {option?.name}
            </p>
          ))}
        </OptionsSectionUI>
        <QuantityGroupUI>
          <QuantityTextUI>{orderProduct.quantity}개</QuantityTextUI>
          <GoProductUI
            onClick={() => {
              navigate(`/product/${orderProduct.name}`);
            }}
          >
            <p>상품 보기</p>
            <FaChevronRight />
          </GoProductUI>
        </QuantityGroupUI>
      </WrapperUI>
    </OrderProductUI>
  );
};

export default OrderProduct;
