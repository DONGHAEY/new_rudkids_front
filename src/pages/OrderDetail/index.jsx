import { useParams } from "react-router-dom";
import Header from "../../shared/Header";
import {
  PageUI,
  FlexWrapperUI,
  SectionDscrptTxtUI,
  OrderProductListUI,
} from "./styles";
import OrderProduct from "./OrderProduct";
import { useOrderQuery } from "../../queries/order";

const OrderDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const orderId = params[routeInfo.paramKeys[0]];

  const { data: orderDetail } = useOrderQuery(orderId);

  return (
    <PageUI>
      <Header isFixed />
      <FlexWrapperUI>
        <SectionDscrptTxtUI>
          결제상품 {orderDetail?.orderProducts?.length}개
        </SectionDscrptTxtUI>
        <OrderProductListUI>
          {orderDetail?.orderProducts?.map((orderProduct) => {
            return <OrderProduct orderProduct={orderProduct} />;
          })}
        </OrderProductListUI>
      </FlexWrapperUI>
    </PageUI>
  );
};

export default OrderDetailPage;
