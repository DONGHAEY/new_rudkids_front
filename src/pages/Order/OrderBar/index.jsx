import { useIsMutating } from "react-query";
import {
  BuyNowButtonUI,
  Spacer,
  SubmitSectionUI,
  SubmitUI,
  TotalPriceTextUI,
  TotalPriceWrapperUI,
  TotalTextUI,
} from "./styles";
import queryKey from "../../../queries/key";

const OrderBar = ({ totalPrice, onClick }) => {
  const orderMutating = useIsMutating([queryKey.order]);

  return (
    <>
      <SubmitSectionUI>
        <SubmitUI>
          <TotalPriceWrapperUI>
            <TotalTextUI>Total</TotalTextUI>
            <TotalPriceTextUI>₩ {totalPrice}</TotalPriceTextUI>
          </TotalPriceWrapperUI>
          <BuyNowButtonUI disabled={orderMutating !== 0} onClick={onClick}>
            {orderMutating ? (
              <img height="40%" src={"https://i.gifer.com/ZKZg.gif"} />
            ) : null}
            BUY NOW
          </BuyNowButtonUI>
        </SubmitUI>
      </SubmitSectionUI>
      <Spacer />
    </>
  );
};

export default OrderBar;
