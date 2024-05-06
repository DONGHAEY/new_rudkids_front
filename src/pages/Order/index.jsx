import React, { useMemo, useState } from "react";
import {
  PageUI,
  ListWrapperUI,
  FlexWrapperUI,
  PageDescriptionTextUI,
  ProductLengthTextUI,
  PageTopSectionUI,
} from "./styles";
import { useCreateOrderMutation } from "../../queries/order";
import CartProduct from "./CartProduct";
import { useCartQuery } from "../../queries/cart";
import Header from "../../shared/Header";
import Shipping from "./Shipping";
import { useFetchPaymentWidget } from "../../hooks/usePaymentWidget";
import { ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import PaymentsWidget from "./PaymentsWidget";
import Submit from "./Submit";

function OrderPage() {
  const createOrderMutation = useCreateOrderMutation();

  const { data: cartData } = useCartQuery();
  const [shipping, setShipping] = useState(null);

  const [paymentWidget] = useFetchPaymentWidget({
    widgetClientKey: process.env["REACT_APP_TOSS_WIDGET_KEY"],
    customerKey: cartData?.id ?? ANONYMOUS,
  });

  const [order, setOrder] = useState(null);

  const productPrice = useMemo(() => {
    if (!cartData) return 0;
    let productPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      productPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return productPrice;
  }, [cartData?.cartProducts]);
  const totalPrice = productPrice + cartData?.shippingPrice;

  const submitHandler = async () => {
    if (!cartData?.id) {
      alert("카트 정보가 없습니다!");
      return;
    }
    if (cartData?.cartProducts?.length <= 0) {
      alert("카트가 비어있습니다.");
      return;
    }
    if (!shipping) {
      alert("배송정보를 입력해야해요!");
      return;
    }
    if (!order) {
      await createOrderMutation.mutateAsync(
        {
          cartId: cartData?.id,
          shipping,
        },
        {
          onSuccess: async (orderData) => {
            let originForToss = process.env.REACT_APP_FE_URL ?? "";
            if (!originForToss.includes("http://localhost")) {
              originForToss =
                "https://web-new-rudkids-front-2aat2cluqq3tx7.sel5.cloudtype.app";
            }
            const obj = {
              orderId: orderData?.id,
              orderName: `루키즈`,
              successUrl: `${originForToss}/paySuccess`,
              failUrl: `${originForToss}/order`,
            };
            setOrder(obj);
            paymentWidget.requestPayment(obj);
          },
        }
      );
    } else {
      paymentWidget.requestPayment(order);
    }
  };

  return (
    <PageUI>
      <Header isFixed={true} $backgroundColor="#f3f3f3" />
      <FlexWrapperUI>
        <PageTopSectionUI>
          <PageDescriptionTextUI>Order Products</PageDescriptionTextUI>
          <ProductLengthTextUI>
            {cartData?.cartProducts?.length}개
          </ProductLengthTextUI>
        </PageTopSectionUI>
        <ListWrapperUI>
          {cartData?.cartProducts?.map((cartProductData) => (
            <CartProduct
              key={cartProductData.id}
              cartProduct={cartProductData}
            />
          ))}
        </ListWrapperUI>
      </FlexWrapperUI>
      <FlexWrapperUI>
        <PageTopSectionUI>
          <PageDescriptionTextUI>📮 Shipping Address</PageDescriptionTextUI>
        </PageTopSectionUI>
        <Shipping value={shipping} setValue={setShipping} />
      </FlexWrapperUI>
      <FlexWrapperUI>
        <PageTopSectionUI>
          <PageDescriptionTextUI>결제수단</PageDescriptionTextUI>
        </PageTopSectionUI>
        {paymentWidget && (
          <PaymentsWidget
            paymentWidget={paymentWidget}
            totalPrice={totalPrice}
          />
        )}
      </FlexWrapperUI>
      <Submit onClick={submitHandler} totalPrice={totalPrice} />
    </PageUI>
  );
}

export default OrderPage;
