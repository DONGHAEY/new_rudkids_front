import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  PageUI,
  ListWrapperUI,
  FlexWrapperUI,
  SectionDscrptTxtUI,
  ProductLengthTextUI,
  SectionDescriptionUI,
  ShippingAddressSectionUI,
  PaySectionUI,
} from "./styles";
import { useCreateOrderMutation } from "../../queries/order";
import CartProduct from "./CartProduct";
import { useCartQuery } from "../../queries/cart";
import Header from "../../shared/Header";
import Shipping from "./Shipping";
import { usePaymentWidget } from "../../hooks/usePaymentWidget";
import OrderBar from "./OrderBar";
import Price from "../../shared/Price";

function CreateOrderPage() {
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

  const totalProductsPrice = useMemo(() => {
    if (!cartData) return 0;
    let totalProductsPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      totalProductsPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return totalProductsPrice;
  }, [cartData?.cartProducts]);

  const totalShippingPrice = cartData?.shippingPrice;

  const totalPrice = totalProductsPrice + totalShippingPrice;

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
              successUrl: `${originForToss}/pay-success`,
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
      <Header isFixed={true} $backgroundColor="none" />
      <FlexWrapperUI>
        <SectionDescriptionUI>
          <SectionDscrptTxtUI>Order Products</SectionDscrptTxtUI>
          <ProductLengthTextUI>
            {cartData?.cartProducts?.length}개
          </ProductLengthTextUI>
        </SectionDescriptionUI>
        <ListWrapperUI>
          {cartData?.cartProducts?.map((cartProductData) => (
            <CartProduct
              key={cartProductData.id}
              cartProduct={cartProductData}
            />
          ))}
        </ListWrapperUI>
      </FlexWrapperUI>
      <ShippingAddressSectionUI>
        <SectionDescriptionUI>
          <SectionDscrptTxtUI>📮 Shipping Address</SectionDscrptTxtUI>
        </SectionDescriptionUI>
        <Shipping value={shipping} setValue={setShipping} />
      </ShippingAddressSectionUI>
      <PaySectionUI>
        <SectionDescriptionUI>
          <SectionDscrptTxtUI>결제수단</SectionDscrptTxtUI>
        </SectionDescriptionUI>
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
        <div
          style={{
            width: "100%",
            marginTop: "22px",
          }}
        >
          <Price
            totalProductsPrice={totalProductsPrice}
            totalShippingPrice={totalShippingPrice}
          />
        </div>
      </PaySectionUI>
      <OrderBar onClick={submitHandler} totalPrice={totalPrice} />
    </PageUI>
  );
}

export default CreateOrderPage;
