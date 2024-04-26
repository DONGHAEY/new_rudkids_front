import { useMemo } from "react";
import { useCartQuery } from "../../queries/cart";
import {
  BuyButtonUI,
  OrderBarUI,
  OrderBarWrapperUI,
  SpacerUI,
  TotalPriceTextUI,
  TotalTextUI,
} from "./styles";

const OrderBar = () => {
  const { data: cartData } = useCartQuery();

  const totalPrice = useMemo(() => {
    if (!cartData) return 0;
    let totalPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      totalPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return totalPrice;
  }, [cartData]);

  return (
    <>
      <OrderBarWrapperUI>
        <OrderBarUI>
          <div>
            <TotalTextUI>Total</TotalTextUI>
            <TotalPriceTextUI>
              {totalPrice?.toLocaleString("ko-KR")}
            </TotalPriceTextUI>
          </div>
          <BuyButtonUI>BUY NOW</BuyButtonUI>
        </OrderBarUI>
      </OrderBarWrapperUI>
      <SpacerUI />
    </>
  );
};

export default OrderBar;
