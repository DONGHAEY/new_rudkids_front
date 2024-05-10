import Header from "../../shared/Header";
import { useCartQuery } from "../../queries/cart";
import {
  FlexWrapperUI,
  ListWrapperUI,
  PageUI,
  PageDescriptionUI,
  PriceWrapperUI,
} from "./styles";
import CartProduct from "./CartProduct";
import CheckoutBar from "./CheckoutBar";
import Price from "../../shared/Price";
import smileSellerSrc from "./assets/smlile_seller.png";
import { useMemo } from "react";

const CartPage = () => {
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
        <PageDescriptionUI>My Cart</PageDescriptionUI>
        <ListWrapperUI>
          {myCartData?.cartProducts?.map((cartProduct) => {
            return (
              <CartProduct key={cartProduct?.id} cartProduct={cartProduct} />
            );
          })}
        </ListWrapperUI>
        <PriceWrapperUI>
          <Price
            totalProductsPrice={totalProductsPrice}
            totalShippingPrice={totalShippingPrice}
          />
        </PriceWrapperUI>
        <div>
          <img src={smileSellerSrc} height="153px" />
        </div>
      </FlexWrapperUI>
      <CheckoutBar cartData={myCartData} />
    </PageUI>
  );
};

export default CartPage;
