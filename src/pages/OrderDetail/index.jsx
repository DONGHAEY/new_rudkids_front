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

const OrderDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const orderId = params[routeInfo.paramKeys[0]];

  const { data: orderDetail } = useOrderQuery(orderId);
  const productsCnt = orderDetail?.orderProducts?.length;

  const editOrderShippingMutation = useEditOrderShippingMutation(orderId);

  return (
    <PageUI>
      <Header isFixed />
      <FlexWrapperUI>
        <SectionDscrptTxtUI>결제상품 {productsCnt}개</SectionDscrptTxtUI>
        <OrderProductList orderProducts={orderDetail?.orderProducts} />
        <OrderPrice
          orderProductsPrice={orderDetail?.price.orderProducts}
          shippingPrice={orderDetail?.price.shipping}
          orderPrice={orderDetail?.totalPrice}
        />
        {orderDetail?.shipping && (
          <Shipping
            canEdit={orderDetail.shipping.trackingNumber ? false : true}
            value={orderDetail.shipping}
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
