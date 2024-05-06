import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { usePaymentWidget } from "../../hooks/usePaymentWidget";
import Submit from "./Submit";

function OrderPage() {
  const createOrderMutation = useCreateOrderMutation();
  const { data: cartData } = useCartQuery();
  const [shipping, setShipping] = useState(null);
  const [generatedOrder, setGeneratedOrder] = useState(null);

  const [paymentWidget] = usePaymentWidget({
    customerKey: cartData?.id,
    widgetClientKey: process.env["REACT_APP_TOSS_WIDGET_KEY"],
  });
  const paymentMethodsRef = useRef();
  const paymentAgreementRef = useRef();

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
    if (
      !paymentAgreementRef.current?.getAgreementStatus().agreedRequiredTerms
    ) {
      alert("필수 약관에 동의해주세요!");
      return;
    }
    // if (!paymentMethodsRef.current?.getSelectedPaymentMethod()) {
    //   alert("결제방식을 선택해주세요!");
    //   return;
    // }

    if (!generatedOrder) {
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
              failUrl: `${originForToss}/generatedOrder`,
            };
            setGeneratedOrder(obj);
            paymentWidget.requestPayment(obj);
          },
        }
      );
    } else {
      paymentWidget.requestPayment(generatedOrder);
    }
  };

  useEffect(() => {
    if (!paymentWidget) return;
    const paymentMethods = paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: totalPrice ?? 0 },
      { variantKey: "DEFAULT" }
    );
    paymentMethodsRef.current = paymentMethods;
  }, [paymentWidget]);

  useEffect(() => {
    if (!paymentWidget) return;
    const paymentAgreement = paymentWidget.renderAgreement("#agreement", {
      variantKey: "AGREEMENT",
    });
    paymentAgreementRef.current = paymentAgreement;
  }, [paymentWidget]);

  useEffect(() => {
    if (!paymentMethodsRef.current) return;
    paymentMethodsRef.current.updateAmount(totalPrice);
  }, [paymentMethodsRef.current, totalPrice]);

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
        <div
          style={{
            width: "100%",
          }}
          id="payment-widget"
        />
        <div
          style={{
            width: "100%",
          }}
          id="agreement"
        />
      </FlexWrapperUI>
      <Submit onClick={submitHandler} totalPrice={totalPrice} />
    </PageUI>
  );
}

export default OrderPage;
