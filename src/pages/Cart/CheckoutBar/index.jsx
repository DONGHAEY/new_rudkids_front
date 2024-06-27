import {
  BuyButtonUI,
  OrderBarUI,
  OrderBarWrapperUI,
  PaymentsImgUI,
  PoorManUI,
  SpacerUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useIsFetching, useIsMutating } from "react-query";
import queryKey from "../../../queries/key";
import paymentsImgSrc from "./assets/payments.webp";
import mutationKey from "../../../mutations/key";
import useCartQuery from "../../../queries/cart/useCartQuery";
import { setOrderingProducts } from "../../CreateOrder";
import { trackClickButton } from "../../../shared_analytics";
import { useMemo } from "react";
import poorManSrc from "./assets/poor_man.webp";

const CheckoutBar = () => {
  const navigate = useNavigate();

  const { data: cartData } = useCartQuery();
  const cartQuerying = useIsFetching(queryKey.cart);
  const cartMutating = useIsMutating(mutationKey.cart);
  const isEmptyCart = cartData?.cartProducts?.length <= 0;

  const totalPrice = useMemo(() => {
    let totalPrice = 0;
    for (let i in cartData?.cartProducts) {
      totalPrice += cartData.cartProducts[i].price;
    }
    return totalPrice;
  }, [cartData?.cartProducts]);

  const buyButtonClickHandler = async () => {
    trackClickButton("checkout", {
      products: cartData?.cartProducts?.map((cartProduct) => {
        const options = {};
        cartProduct.options?.map((option) => {
          options[option.groupName] = option.name;
        });
        return {
          product_id: cartProduct.productId,
          product_name: cartProduct.name,
          price: cartProduct.price,
          quantity: cartProduct.quantity,
          category: cartProduct.category,
          ...options,
        };
      }),
      total_price: totalPrice,
      count: cartData?.cartProducts?.length,
    });
    setOrderingProducts(cartData?.cartProducts);
    navigate(`/create-order`);
  };

  return (
    <>
      <OrderBarWrapperUI>
        <OrderBarUI>
          {totalPrice === 0 && <PoorManUI src={poorManSrc} />}
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
