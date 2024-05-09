import Header from "../../shared/Header";
import { useCartQuery } from "../../queries/cart";
import {
  FlexWrapperUI,
  ListWrapperUI,
  PageUI,
  PageDescriptionUI,
} from "./styles";
import CartProduct from "./CartProduct";
import CheckoutBar from "./CheckoutBar";
import { useMemo } from "react";

const CartPage = () => {
  const { data: myCartData } = useCartQuery();

  const productPrice = useMemo(() => {
    if (!myCartData) return 0;
    let productPrice = 0;
    myCartData.cartProducts?.forEach((cartProduct) => {
      productPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return productPrice;
  }, [myCartData?.cartProducts]);

  const shippingPrice = myCartData?.shippingPrice;
  const totalPrice = productPrice + shippingPrice;

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
      </FlexWrapperUI>
      <CheckoutBar cartData={myCartData} />
    </PageUI>
  );
};

export default CartPage;
