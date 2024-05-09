import { useMemo } from "react";
import {
  BuyButtonUI,
  ColWrapperUI,
  OrderBarUI,
  OrderBarWrapperUI,
  PaymentsImgUI,
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
import paymentsImgSrc from "./assets/payments.png";

const CheckoutBar = () => {
  const navigate = useNavigate();

  const cartMutating = useIsMutating([queryKey.cart]);

  const buyButtonClickHandler = async () => {
    navigate(`/order`);
  };

  return (
    <>
      <OrderBarWrapperUI>
        <OrderBarUI>
          <div>
            <PaymentsImgUI src={paymentsImgSrc} />
          </div>
          <BuyButtonUI
            disabled={cartMutating !== 0}
            onClick={buyButtonClickHandler}
          >
            Check Out!
          </BuyButtonUI>
        </OrderBarUI>
      </OrderBarWrapperUI>
      <SpacerUI />
    </>
  );
};

export default CheckoutBar;
