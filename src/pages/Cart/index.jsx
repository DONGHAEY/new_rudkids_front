import { useEffect } from "react";
import Header from "../../components/Header";
import { useCartQuery } from "../../queries/cart";
import { FlexWrapperUI, ListWrapperUI, PageUI } from "./styles";
import CartProduct from "./CartProduct";
import OrderBar from "../../components/OrderBar";

const CartPage = () => {
  const { data: myCartData } = useCartQuery();

  useEffect(() => {
    console.log(myCartData);
  }, [myCartData]);

  return (
    <PageUI>
      <Header $backgroundColor="white" />
      <FlexWrapperUI>
        <ListWrapperUI>
          <h2
            style={{
              fontFamily: "Poppins-SemiBold",
              marginBlock: "20px",
              width: "80%",
              textAlign: "left",
            }}
          >
            My Cart
          </h2>
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
