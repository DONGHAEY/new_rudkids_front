import { useMemo } from "react";
import {
  BuyButtonUI,
  OrderBarUI,
  OrderBarWrapperUI,
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

  const totalPrice = useMemo(() => {
    if (!cartData) return 0;
    let totalPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      totalPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return totalPrice;
  }, [cartData?.cartProducts]);

  const buyButtonClickHandler = async () => {
    navigate(`/order`);
  };

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
