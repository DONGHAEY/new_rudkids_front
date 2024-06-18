import { useIsMutating } from "react-query";
import { BuyNowButtonUI, Spacer, OrderBarUI, SubmitUI } from "./styles";
import queryKey from "../../../queries/key";
import paymentsimgSrc from "./assets/payments.webp";

const OrderBar = ({ totalPrice, onClick }) => {
  const orderMutating = useIsMutating([queryKey.order]);

  return (
    <OrderBarUI>
      <SubmitUI>
        <div>
          <img src={paymentsimgSrc} height="24px" />
        </div>
        <BuyNowButtonUI disabled={orderMutating !== 0} onClick={onClick}>
          BUY NOW
        </BuyNowButtonUI>
      </SubmitUI>
    </OrderBarUI>
  );
};

export default OrderBar;
