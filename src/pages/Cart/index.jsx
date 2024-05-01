import Header from "../../shared/Header";
import {
  useCartProductQuantityMutation,
  useCartQuery,
} from "../../queries/cart";
import {
  FlexWrapperUI,
  ListWrapperUI,
  PageUI,
  PageDescriptionUI,
} from "./styles";
import CartProduct from "./CartProduct";
import OrderBar from "./OrderBar";

const CartPage = () => {
  const { data: myCartData } = useCartQuery();

  return (
    <PageUI>
      <Header $backgroundColor="white" />
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
      <OrderBar cartData={myCartData} />
    </PageUI>
  );
};

export default CartPage;
