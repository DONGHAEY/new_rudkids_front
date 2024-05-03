import { useMemo } from "react";
import {
  BuyButtonUI,
  ColWrapperUI,
  OrderBarUI,
  OrderBarWrapperUI,
  PriceNameTextUI,
  PriceTextUI,
  RowBeetwenUI,
  SpacerUI,
  TotalPriceTextUI,
  TotalTextUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useIsMutating } from "react-query";
import queryKey from "../../../queries/key";

const OrderBar = ({ cartData }) => {
  const navigate = useNavigate();

  const cartMutating = useIsMutating([queryKey.cart]);
  const productPrice = useMemo(() => {
    if (!cartData) return 0;
    let productPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      productPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return productPrice;
  }, [cartData?.cartProducts]);

  const totalPrice = productPrice + cartData?.shippingPrice;

  const buyButtonClickHandler = async () => {
    navigate(`/order`);
  };

  return (
    <>
      <OrderBarWrapperUI>
        <OrderBarUI>
          <ColWrapperUI>
            <RowBeetwenUI>
              <PriceNameTextUI>총 상품가격</PriceNameTextUI>
              <PriceTextUI>
                ₩ {productPrice?.toLocaleString("ko-KR")}
              </PriceTextUI>
            </RowBeetwenUI>
            <RowBeetwenUI>
              <PriceNameTextUI>배송비</PriceNameTextUI>
              <PriceTextUI>₩ {cartData?.shippingPrice}</PriceTextUI>
            </RowBeetwenUI>
          </ColWrapperUI>
          <RowBeetwenUI>
            <TotalTextUI>Total</TotalTextUI>
            <TotalPriceTextUI>
              ₩ {totalPrice?.toLocaleString("ko-KR")}
            </TotalPriceTextUI>
          </RowBeetwenUI>
          <BuyButtonUI
            disabled={cartMutating !== 0}
            onClick={buyButtonClickHandler}
          >
            BUY NOW
          </BuyButtonUI>
        </OrderBarUI>
      </OrderBarWrapperUI>
      <SpacerUI />
    </>
  );
};

export default OrderBar;
