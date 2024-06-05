import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useCreatePaymentMutation from "../../mutations/payment/useCreatePaymentMutation";
import useOrderDetailQuery from "../../queries/order/useOrderDetailQuery";
import {
  PageUI,
  FlexWrapperUI,
  SectionDscrptTxtUI,
  ColUI,
  RowUI,
  DateTxtUI,
  CntTxtUI,
} from "./styles";
import Loader from "../../shared_components/Loader";
import useEditOrderShippingMutation from "../../mutations/order/useEditOrderShippingMutation";
import Shipping from "../../shared_components/Shipping";
import OrderPrice from "../../shared_components/OrderPrice";
import Header from "../../shared_components/Header";
import OrderProductList from "../OrderDetail/OrderProductList";
import PaymentStatus from "./PaymentStatus";
import Footer from "../../shared_components/Footer";

const PaySuccessPage = () => {
  const createPaymentMutation = useCreatePaymentMutation();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");

  const { data: orderData } = useOrderDetailQuery(orderId);
  const productsCnt = orderData?.orderProducts?.length;
  const editOrderShippingMutation = useEditOrderShippingMutation(orderId);

  useEffect(() => {
    if (!orderId || !paymentKey || !amount) return;
    (async () => {
      await createPaymentMutation.mutateAsync(
        {
          orderId,
          paymentKey,
          amount: Number(amount),
        },
        {
          onError: (e) => {
            alert(e?.response?.data?.message ?? "결제에 실패했습니다");
          },
        }
      );
    })();
  }, [orderId, paymentKey, amount]);

  if (createPaymentMutation.isLoading) {
    return <Loader />;
  }

  return (
    <PageUI>
      <Header isFixed />
      <FlexWrapperUI>
        <PaymentStatus status={orderData?.payment?.status} />
        <ColUI gap="40px">
          <ColUI gap="14px">
            <RowUI gap="22px">
              <SectionDscrptTxtUI>주문상품</SectionDscrptTxtUI>
              <DateTxtUI>
                {orderData?.createdAt?.replaceAll("-", ".").substring(0, 10)}
              </DateTxtUI>
              <CntTxtUI>총 {productsCnt}개</CntTxtUI>
            </RowUI>
            <OrderProductList orderProducts={orderData?.orderProducts} />
          </ColUI>
          <ColUI gap="36px">
            <ColUI gap="14px">
              <SectionDscrptTxtUI>결제정보</SectionDscrptTxtUI>
              <OrderPrice
                orderProductsPrice={orderData?.price.orderProducts}
                shippingPrice={orderData?.price.shipping}
                payment={orderData?.payment}
              />
            </ColUI>
            <ColUI gap="14px">
              <SectionDscrptTxtUI>배송지</SectionDscrptTxtUI>
              {orderData?.shipping && (
                <Shipping
                  canEdit={false}
                  value={orderData.shipping}
                  setValue={(shipping) => {
                    editOrderShippingMutation.mutateAsync(shipping);
                  }}
                />
              )}
            </ColUI>
          </ColUI>
        </ColUI>
      </FlexWrapperUI>
      <Footer />
    </PageUI>
  );
};

export default PaySuccessPage;
