import { useIsMutating } from "react-query";
import { BuyNowButtonUI, OrderBarUI, SubmitUI, PaymentImgUI } from "./styles";
import queryKey from "../../../queries/key";
import paymentsimgSrc from "./assets/payments.webp";

const OrderBar = ({ onClick }) => {
  const orderMutating = useIsMutating([queryKey.order]);

  return (
    <OrderBarUI>
      <SubmitUI>
        <div>
          <PaymentImgUI src={paymentsimgSrc} />
        </div>
        <BuyNowButtonUI disabled={orderMutating !== 0} onClick={onClick}>
          BUY NOW
        </BuyNowButtonUI>
      </SubmitUI>
    </OrderBarUI>
  );
};

export default OrderBar;
