import Header from "../../shared/Header";
import { useCartQuery } from "../../queries/cart";
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
import { useMemo } from "react";
import { usePopup } from "../../hooks/usePopup";
import Popup from "../../shared/Popup";
import ShippingEvent from "./ShippingEvent";

const CartPage = () => {
  const [popupNavigate, poupPop] = usePopup();
  const { data: myCartData } = useCartQuery();

  const totalProductsPrice = useMemo(() => {
    if (!myCartData) return 0;
    let totalProductsPrice = 0;
    myCartData.cartProducts?.forEach((cartProduct) => {
      totalProductsPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return totalProductsPrice;
  }, [myCartData?.cartProducts]);

  const totalShippingPrice = myCartData?.shippingPrice;

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
