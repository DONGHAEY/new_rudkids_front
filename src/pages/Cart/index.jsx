import Header from "../../shared_components/Header";
import {
  FlexWrapperUI,
  CartProductListUI,
  PageUI,
  SectionDscrptTxtUI,
  PriceWrapperUI,
  SmileSellerImgUI,
} from "./styles";
import CartProduct from "./CartProduct";
import CheckoutBar from "./CheckoutBar";
import Price from "../../shared_components/Price";
import smileSellerSrc from "./assets/kid_man.webp";
import { useMemo } from "react";
import useCartQuery from "../../queries/cart/useCartQuery";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import GoToShop from "./GoToShop";
import DeleteAlert from "./DeleteAlert";

const CartPage = () => {
  const { data: myCartData } = useCartQuery();

  const hasProducts = myCartData?.cartProducts?.length;

  const totalProductsPrice = useMemo(() => {
    if (!myCartData) return 0;
    let totalProductsPrice = 0;
    myCartData.cartProducts?.map((cartProduct) => {
      totalProductsPrice += cartProduct.price * cartProduct.quantity;
    });
    return totalProductsPrice;
  }, [myCartData?.cartProducts]);

  useBodyBackground("#0027F1");

  return (
    <>
      <PageUI>
        <Header />
        {hasProducts ? (
          <FlexWrapperUI>
            <SectionDscrptTxtUI>My Cart</SectionDscrptTxtUI>
            <CartProductListUI>
              {myCartData?.cartProducts?.map((cartProduct) => (
                <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
              ))}
            </CartProductListUI>
            <PriceWrapperUI>
              <Price
                totalProductsPrice={totalProductsPrice}
                totalShippingPrice={1}
              />
            </PriceWrapperUI>
          </FlexWrapperUI>
        ) : (
          <GoToShop />
        )}
        <SmileSellerImgUI src={smileSellerSrc} />
        <img
          src={smileSellerSrc}
          width="100%"
          style={{
            opacity: 0,
          }}
        />
      </PageUI>

      <CheckoutBar cartData={myCartData} />
    </>
  );
};

export default CartPage;
