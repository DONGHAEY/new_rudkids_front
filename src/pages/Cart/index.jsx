import Header from "../../shared/Header";
import {
  useCartQuery,
  useSetShippingPriceToZeroMutation,
} from "../../queries/cart";
import {
  FlexWrapperUI,
  CartProductListUI,
  PageUI,
  SectionDscrptTxtUI,
  PriceWrapperUI,
} from "./styles";
import CartProduct from "./CartProduct";
import CheckoutBar from "./CheckoutBar";
import Price from "../../shared/Price";
import smileSellerSrc from "./assets/smlile_seller.png";
import eventCouponImgSrc from "./assets/coupon_1.png";
import { useEffect, useMemo } from "react";
import { usePopup } from "../../hooks/usePopup";
import Popup from "../../shared/Popup";
import ShippingEvent from "./ShippingEvent";

const CartPage = () => {
  const [popupNavigate, poupPop] = usePopup();
  const { data: myCartData } = useCartQuery();
  const setShippingPriceZeroMutation = useSetShippingPriceToZeroMutation();

  const totalProductsPrice = useMemo(() => {
    if (!myCartData) return 0;
    let totalProductsPrice = 0;
    myCartData.cartProducts?.map((cartProduct) => {
      totalProductsPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return totalProductsPrice;
  }, [myCartData?.cartProducts]);

  const totalShippingPrice = myCartData?.shippingPrice;

  useEffect(() => {
    if (!myCartData) return;
    (async () => {
      const shippingFreeJoin = localStorage.getItem("shipping_event_join");
      if (!shippingFreeJoin) return;
      await setShippingPriceZeroMutation.mutateAsync();
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
              <CartProduct key={cartProduct?.id} cartProduct={cartProduct} />
            );
          })}
        </CartProductListUI>
        <PriceWrapperUI>
          <Price
            totalProductsPrice={totalProductsPrice}
            totalShippingPrice={totalShippingPrice}
          />
        </PriceWrapperUI>
        <div>
          <img
            onClick={() => {
              popupNavigate("shipping_price_none_event");
            }}
            src={eventCouponImgSrc}
            width="100%"
          />
        </div>
        <div>
          <img src={smileSellerSrc} height="153px" />
        </div>
      </FlexWrapperUI>
      <Popup popupName="shipping_price_none_event" showHeader={false}>
        <ShippingEvent />
      </Popup>
      <CheckoutBar cartData={myCartData} />
    </PageUI>
  );
};

export default CartPage;
