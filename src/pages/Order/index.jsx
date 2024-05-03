import React, { useMemo } from "react";
import {
  PageFormUI,
  ListWrapperUI,
  FlexWrapperUI,
  PageDescriptionTextUI,
  ProductLengthTextUI,
  PageTopSectionUI,
} from "./styles";
import { useCreateOrderMutation } from "../../queries/order";
import CartProduct from "./CartProduct";
import { useCartQuery } from "../../queries/cart";
import { Controller, useForm } from "react-hook-form";
import Header from "../../shared/Header";
import Shipping from "./Shipping";
import { useFetchPaymentWidget } from "../../hooks/usePaymentWidget";
import { ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import PaymentsWidget from "./PaymentsWidget";

function OrderPage({}) {
  const createOrderMutation = useCreateOrderMutation();

  const { data: cartData } = useCartQuery();
  const [paymentWidget] = useFetchPaymentWidget({
    widgetClientKey: "test_gck_oEjb0gm23PO0JJ6M9d548pGwBJn5",
    customerKey: cartData?.id ?? ANONYMOUS,
  });

  const productPrice = useMemo(() => {
    if (!cartData) return 0;
    let productPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      productPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return productPrice;
  }, [cartData?.cartProducts]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (formData) => {
    console.log(formData);
    //주문자 정보 있는지 첵
    //배송지 정보 있는지 첵
    //카트Id 있는지 첵y
    //결제할 금액이 0원이 넘는지도
    // const orderData = await createOrderMutation.mutateAsync({});
    // const orderName = `루키즈`;
  };

  return (
    <>
      <PageFormUI>
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
          <Controller
            control={control}
            name="shipping"
            render={({ field: { onChange, value } }) => {
              return <Shipping value={value} setValue={onChange} />;
            }}
          />
        </FlexWrapperUI>
        <FlexWrapperUI>
          <PageTopSectionUI>
            <PageDescriptionTextUI>결제수단</PageDescriptionTextUI>
          </PageTopSectionUI>
          {paymentWidget && (
            <PaymentsWidget paymentWidget={paymentWidget} productPrice={0} />
          )}
        </FlexWrapperUI>
      </PageFormUI>
    </>
  );
}

export default OrderPage;
