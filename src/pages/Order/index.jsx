import React, { useMemo, useState } from "react";
import {
  FieldsWrapperUI,
  CartProductsWrapperUI,
  PageFormUI,
  TotalPriceTextUI,
  TotalPriceWrapperUI,
  PaymentInfoWrapperUI,
} from "./styles";
import { useCreateOrderMutation } from "../../queries/order";
import CartProduct from "./CartProduct";
import { useCartQuery } from "../../queries/cart";
import { Controller, useForm } from "react-hook-form";
import PhoneAuthInput from "./PhoneAuthInput";
import FieldArea from "./FieldArea/FieldArea";
import ObjectFieldArea from "./FieldArea/ObjectFieldArea";

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
    //카트Id 있는지 첵
    //결제할 금액이 0원이 넘는지도
    // const orderData = await createOrderMutation.mutateAsync({});
    // const orderName = `루키즈`;
  };

  return (
    <>
      <PageFormUI onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapperUI>
          <ObjectFieldArea label={"주문자 정보"}>
            <FieldArea
              label="이름"
              errorMessage={errors?.orderer?.name?.message}
            >
              <input
                placeholder="주문자 이름"
                {...register("orderer.name", {
                  required: "주문자명은 필수입니다.",
                  minLength: {
                    value: 2,
                    message: "2자 이상으로 입력해주세요.",
                  },
                  maxLength: {
                    value: 13,
                    message: "13자 이하로 입력해주세요",
                  },
                })}
              />
            </FieldArea>
            <FieldArea
              label="전화번호"
              errorMessage={errors?.orderer?.phoneNumber?.message}
            >
              <Controller
                name="orderer.phoneNumber"
                control={control}
                defaultValue={""}
                rules={{ required: "전화번호인증은 필수입니다." }}
                render={({ field }) => (
                  <PhoneAuthInput
                    ref={field.ref}
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </FieldArea>
          </ObjectFieldArea>
          {/* <Controller
            name="deliveryAddress"
            control={control}
            defaultValue={""}
            rules={{ required: "배송지 입력은 필수입니다." }}
            render={({ field, fieldState }) => (
              <ObjectFieldArea
                label={"배송지"}
                errorMessage={fieldState.error && fieldState.error.message}
              >
                <DeliveryAddressInput />
              </ObjectFieldArea>
            )}
          /> */}
          <ObjectFieldArea label={"배송지 정보"}>
            <FieldArea
              label="상세주소"
              errorMessage={errors?.deliveryAddress?.detail?.message}
            >
              <input
                placeholder="상세주소"
                {...register("deliveryAddress.detail", {
                  required: "필수입니다.",
                  minLength: {
                    value: 3,
                    message: "3자 이상으로 입력해주세요.",
                  },
                })}
              />
            </FieldArea>
            <FieldArea
              label="받는사람이름"
              errorMessage={errors?.deliveryAddress?.recieverName?.message}
            >
              <input
                placeholder="받는사람 이름"
                {...register("deliveryAddress.recieverName", {
                  required: "필수입니다.",
                  minLength: {
                    value: 1,
                    message: "1자 이상으로 입력해주세요.",
                  },
                })}
              />
            </FieldArea>
          </ObjectFieldArea>
        </FieldsWrapperUI>
        <CartProductsWrapperUI>
          {cartData?.cartProducts?.map((cartProductData) => (
            <CartProduct
              key={cartProductData.id}
              cartProductData={cartProductData}
            />
          ))}
        </CartProductsWrapperUI>
        <PaymentInfoWrapperUI>
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
            <button type="submit">TOSS로 계속</button>
          </div>
        </PaymentInfoWrapperUI>
      </PageFormUI>
    </>
  );
}

export default OrderPage;
