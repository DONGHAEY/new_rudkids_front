import { useEffect } from "react";
import Header from "../../components/Header";
import { useCartQuery } from "../../queries/cart";
import {
  FlexWrapperUI,
  ListWrapperUI,
  PageUI,
  PageDescriptionUI,
} from "./styles";
import CartProduct from "./CartProduct";
import OrderBar from "../../components/OrderBar";

const CartPage = () => {
  const { data: myCartData } = useCartQuery();

  return (
    <PageUI>
      <Header $backgroundColor="white" />
      <FlexWrapperUI>
        <ListWrapperUI>
          <PageDescriptionUI>My Cart</PageDescriptionUI>
          {myCartData?.cartProducts?.map((cartProduct) => {
            return <CartProduct cartProduct={cartProduct} />;
          })}
        </ListWrapperUI>
      </FlexWrapperUI>
      <OrderBar />
    </PageUI>
  );
};

export default CartPage;
