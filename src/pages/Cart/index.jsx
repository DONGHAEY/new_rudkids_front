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
import { useMemo } from "react";
import useCartQuery from "../../queries/cart/useCartQuery";
import { useBodyBackground } from "../../hooks/useBodyBackground";

const CartPage = () => {
  const { data: myCartData } = useCartQuery();
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
        <SmileSellerWrapperUI>
          <img src={smileSellerSrc} width="100%" />
        </SmileSellerWrapperUI>
      </FlexWrapperUI>
      <CheckoutBar cartData={myCartData} />
    </PageUI>
  );
};

export default CartPage;
