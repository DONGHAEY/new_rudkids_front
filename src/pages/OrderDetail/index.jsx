import { useParams } from "react-router-dom";
import Header from "../../shared/Header";
import { PageUI, FlexWrapperUI, SectionDscrptTxtUI } from "./styles";
import {
  useEditOrderShippingMutation,
  useOrderQuery,
} from "../../queries/order";
import OrderProductList from "./OrderProductList";
import OrderPrice from "./OrderPrice";
import Shipping from "../../shared/Shipping";
import PaymentStatus from "./PaymentStatus";

const OrderDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const orderId = params[routeInfo.paramKeys[0]];

  const { data: orderData } = useOrderQuery(orderId);
  const productsCnt = orderData?.orderProducts?.length;

  const editOrderShippingMutation = useEditOrderShippingMutation(orderId);

  return (
    <PageUI>
      <Header isFixed />
      <FlexWrapperUI>
        <PaymentStatus status={orderData?.payment?.status} />
        <SectionDscrptTxtUI>결제상품 {productsCnt}개</SectionDscrptTxtUI>
        <OrderProductList orderProducts={orderData?.orderProducts} />
        <OrderPrice
          orderProductsPrice={orderData?.price.orderProducts}
          shippingPrice={orderData?.price.shipping}
          orderPrice={orderData?.totalPrice}
        />
        {orderData?.shipping && (
          <Shipping
            canEdit={orderData.shipping.trackingNumber ? false : true}
            value={orderData.shipping}
            setValue={(shipping) => {
              editOrderShippingMutation.mutateAsync(shipping);
            }}
          />
        )}
      </FlexWrapperUI>
    </PageUI>
  );
};

export default OrderDetailPage;
