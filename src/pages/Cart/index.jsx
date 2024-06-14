import Header from "../../shared_components/Header";
import {
  FlexWrapperUI,
  CartProductListUI,
  PageUI,
  SectionDscrptTxtUI,
  PriceWrapperUI,
  SmileSellerWrapperUI,
} from "./styles";

import CartProduct from "./CartProduct";
import CheckoutBar from "./CheckoutBar";
import Price from "../../shared_components/Price";
import smileSellerSrc from "./assets/smile_kid_man.svg";
// import eventCouponImgSrc from "./assets/coupon_1.png";
import { useEffect, useMemo } from "react";
import { usePopup } from "../../hooks/usePopup";
// import PopupRoute from "../../shared_components/PopupRoute";
// import ShippingEvent from "./ShippingEvent";
import useCartQuery from "../../queries/cart/useCartQuery";
import useEditShippingPriceToZeroMutation from "../../mutations/cart/useEditShippingPriceToZeroMutation";
import Background from "../../shared_components/Background";
import { useBodyBackground } from "../../hooks/useBodyBackground";

const CartPage = () => {
  const [popupNavigate, poupPop] = usePopup();
  const { data: myCartData } = useCartQuery();
  const editShippingPriceToZeroMutation = useEditShippingPriceToZeroMutation();

  const totalProductsPrice = useMemo(() => {
    if (!myCartData) return 0;
    let totalProductsPrice = 0;
    myCartData.cartProducts?.map((cartProduct) => {
      totalProductsPrice += cartProduct.price * cartProduct.quantity;
    });
    return totalProductsPrice;
  }, [myCartData?.cartProducts]);

  const totalShippingPrice = myCartData?.shippingPrice;

  useBodyBackground("#1a94d9");

  useEffect(() => {
    if (!myCartData) return;
    (async () => {
      const shippingFreeJoin = localStorage.getItem("shipping_event_join");
      if (!shippingFreeJoin) return;
      await editShippingPriceToZeroMutation.mutateAsync();
      localStorage.setItem("shipping_event_joined", true);
      alert("친구초대 수락으로, 배송비 0원을 적용했어요!");
      localStorage.removeItem("shipping_event_join");
    })();
  }, [myCartData]);

  return (
    <PageUI>
      <Header />
      <FlexWrapperUI>
        <SectionDscrptTxtUI>My Cart</SectionDscrptTxtUI>
        <CartProductListUI>
          {myCartData?.cartProducts?.map((cartProduct) => {
            return (
              <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
            );
          })}
        </CartProductListUI>
        <PriceWrapperUI>
          <Price
            totalProductsPrice={totalProductsPrice}
            totalShippingPrice={totalShippingPrice}
          />
        </PriceWrapperUI>
        {/* <div>
          <img
            onClick={() => {
              popupNavigate("shipping_price_none_event");
            }}
            src={eventCouponImgSrc}
            width="100%"
          />
        </div> */}
        <SmileSellerWrapperUI>
          <img src={smileSellerSrc} height="200px" />
        </SmileSellerWrapperUI>
      </FlexWrapperUI>

      {/* <PopupRoute name="shipping_price_none_event">
        <ShippingEvent />
      </PopupRoute> */}
      <CheckoutBar cartData={myCartData} />
    </PageUI>
  );
};

export default CartPage;
