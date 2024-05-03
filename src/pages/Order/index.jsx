import React, { useMemo } from "react";
import {
  CartProductsWrapperUI,
  PageFormUI,
  TotalPriceTextUI,
  TotalPriceWrapperUI,
  PaymentInfoWrapperUI,
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

function OrderPage({}) {
  const createOrderMutation = useCreateOrderMutation();
  const { data: cartData } = useCartQuery();

  const totalPrice = useMemo(() => {
    if (!cartData) return 0;
    let totalPrice = 0;
    cartData.cartProducts?.forEach((cartProduct) => {
      totalPrice += cartProduct.product.price * cartProduct.quantity;
    });
    return totalPrice;
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
        <Header isFixed={false} />
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
        {/* <PaymentInfoWrapperUI>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
            }}
          >
            <TotalPriceWrapperUI>
              Total
              <TotalPriceTextUI>
                {totalPrice?.toLocaleString("ko-KR")} WON
              </TotalPriceTextUI>
            </TotalPriceWrapperUI>
            <button onClick={handleSubmit(onSubmit)}>계속</button>
          </div>
        </PaymentInfoWrapperUI> */}
      </PageFormUI>
    </>
  );
}

export default OrderPage;
