import {
  BuyButtonUI,
  OrderBarUI,
  OrderBarWrapperUI,
  PaymentsImgUI,
  SpacerUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useIsFetching, useIsMutating } from "react-query";
import queryKey from "../../../queries/key";
import paymentsImgSrc from "./assets/payments.png";
import mutationKey from "../../../mutations/key";
import useCartQuery from "../../../queries/cart/useCartQuery";

const CheckoutBar = () => {
  const navigate = useNavigate();

  const { data: cartData } = useCartQuery();
  const cartQuerying = useIsFetching(queryKey.cart);
  const cartMutating = useIsMutating(mutationKey.cart);
  const isEmptyCart = cartData?.cartProducts?.length <= 0;

  const buyButtonClickHandler = async () => {
    navigate(`/create-order`);
  };

  return (
    <>
      <OrderBarWrapperUI>
        <OrderBarUI>
          <div>
            <PaymentsImgUI src={paymentsImgSrc} />
          </div>
          <BuyButtonUI
            disabled={cartMutating || cartQuerying || isEmptyCart}
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
