import { useParams } from "react-router-dom";
import Header from "../../shared_components/Header";
import {
  PageUI,
  FlexWrapperUI,
  SectionDscrptTxtUI,
  ColUI,
  RowUI,
  DateTxtUI,
  CntTxtUI,
} from "./styles";
import useOrderDetailQuery from "../../queries/order/useOrderDetailQuery";
import useEditOrderShippingMutation from "../../mutations/order/useEditOrderShippingMutation";
import TrackingInfo from "../../shared_components/TrackingInfo";
import Shipping from "../../shared_components/Shipping";
import OrderPrice from "../../shared_components/OrderPrice";
import OrderProductList from "./OrderProductList";
import Footer from "../../shared_components/Footer";
import RudCardAlert from "./RudCardAlert";
import { useBodyBackground } from "../../hooks/useBodyBackground";

const OrderDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const orderId = params[routeInfo.paramKeys[0]];
  const { data: orderData } = useOrderDetailQuery(orderId);
  const productsCnt = orderData?.orderProducts?.length;
  const editOrderShippingMutation = useEditOrderShippingMutation(orderId);

  useBodyBackground("#f3f3f3");

  return (
    <PageUI>
      <Header isFixed />
      <FlexWrapperUI>
        <RudCardAlert orderData={orderData} />
        <ColUI gap="40px">
          <ColUI gap="36px">
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
            {orderData?.shipping?.trackingNumber && (
              <TrackingInfo
                trackingNumber={orderData?.shipping?.trackingNumber}
              />
            )}
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
                  canEdit={orderData.shipping.trackingNumber ? false : true}
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

export default OrderDetailPage;
