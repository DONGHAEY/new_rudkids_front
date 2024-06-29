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
  PaymentWidgetUI,
  AgreementUI,
  PriceWrapperUI,
} from "./styles";
import Product from "./Product";
import Header from "../../shared_components/Header";
import Shipping from "../../shared_components/Shipping";
import { usePaymentWidget } from "../../hooks/usePaymentWidget";
import OrderBar from "./OrderBar";
import Price from "../../shared_components/Price";
import useCreateOrderMutation from "../../mutations/order/useCreateOrderMutation";
import StorageKey from "../../storageKey";
import useUserQuery from "../../queries/user/useUserQuery";
import useDeleteCartMutation from "../../mutations/cart/useDeleteCartMutation";
import { useSearchParams } from "react-router-dom";
import { useBodyBackground } from "../../hooks/useBodyBackground";

function CreateOrderPage() {
  const [searchParams] = useSearchParams();

  const { data: userData } = useUserQuery();
  const orderingProducts = useMemo(() => getOrderingProducts(), []);

  const paymentMethodsRef = useRef();
  const paymentAgreementRef = useRef();

  const createOrderMutation = useCreateOrderMutation();
  const deleteCartMutation = useDeleteCartMutation();

  const [shipping, setShipping] = useState(null);
  const [generatedOrder, setGeneratedOrder] = useState(null);

  const btnType = searchParams.get("type");

  const [paymentWidget] = usePaymentWidget({
    customerKey: userData?.id,
    widgetClientKey: process.env["REACT_APP_TOSS_WIDGET_KEY"],
  });

  const totalProductsPrice = useMemo(() => {
    if (!orderingProducts.length) return 0;
    let totalProductsPrice = 0;
    orderingProducts?.forEach((cartProduct) => {
      totalProductsPrice += cartProduct?.price * cartProduct.quantity;
    });
    return totalProductsPrice;
  }, [orderingProducts]);

  const totalShippingPrice = 1;

  const totalPrice = totalProductsPrice + totalShippingPrice;

  const submitHandler = async () => {
    if (orderingProducts?.length <= 0) {
      alert("주문 상품 내용이 비어있습니다.");
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

    if (!generatedOrder) {
      await createOrderMutation.mutateAsync(
        {
          orderingProducts: orderingProducts?.map((cartProduct) => ({
            productId: cartProduct.productId,
            quantity: cartProduct.quantity,
            optionIds: cartProduct?.options?.map((option) => option.id),
          })),
          shipping,
        },
        {
          onSuccess: async (orderData) => {
            if (btnType === "checkout") {
              await deleteCartMutation.mutateAsync();
            }
            let originForToss = process.env.REACT_APP_ORIGIN_FOR_TOSS;
            const obj = {
              orderId: orderData?.id,
              orderName: `루키즈`,
              successUrl: `${originForToss}/pay`,
              failUrl: `${originForToss}/pay-fail`,
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

  useBodyBackground("white");

  return (
    <PageUI>
      <Header isFixed={true} $backgroundColor="none" color="black" />
      <FlexWrapperUI>
        <SectionDescriptionUI>
          <SectionDscrptTxtUI>Order Products</SectionDscrptTxtUI>
          <ProductLengthTextUI>
            {orderingProducts?.length}개
          </ProductLengthTextUI>
        </SectionDescriptionUI>
        <ListWrapperUI>
          {orderingProducts?.map((productData) => (
            <Product key={productData.id} {...productData} />
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
        <PaymentWidgetUI id="payment-widget" />
        <AgreementUI id="agreement" />
        <PriceWrapperUI>
          <Price
            totalProductsPrice={totalProductsPrice}
            totalShippingPrice={totalShippingPrice}
          />
        </PriceWrapperUI>
      </PaySectionUI>
      <OrderBar onClick={submitHandler} totalPrice={totalPrice} />
    </PageUI>
  );
}

export function setOrderingProducts(products) {
  sessionStorage.setItem(
    StorageKey.ordering_products,
    JSON.stringify(products)
  );
}

function getOrderingProducts() {
  return JSON.parse(sessionStorage.getItem(StorageKey.ordering_products)) ?? [];
}

export default CreateOrderPage;
