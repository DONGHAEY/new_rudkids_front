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
import { useForm } from "react-hook-form";
import Header from "../../shared/Header";
import { IoMdAdd } from "react-icons/io";

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
            <PageDescriptionTextUI>📮 Shipping Adress</PageDescriptionTextUI>
          </PageTopSectionUI>
          <div
            style={{
              width: "100%",
              height: "184px",
              border: "solid 2px #C3E2FF",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                fontFamily: "Pretendard-SemiBold",
              }}
            >
              배송지를 먼저 입력해주세요
            </p>
            <button
              style={{
                backgroundColor: "#257ED6",
                color: "white",
                border: "none",
                borderRadius: "24px",
                padding: "16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IoMdAdd fontSize="18px" />
              <p
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontSize: "14px",
                }}
              >
                등록하기
              </p>
            </button>
          </div>
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
