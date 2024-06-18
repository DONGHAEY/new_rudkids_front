import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../shared_components/Header";
import useOrderDetailQuery from "../../queries/order/useOrderDetailQuery";
import {
  PageUI,
  FlexWrapperUI,
  SectionDscrptTxtUI,
  ColUI,
  ActionBtnUI,
  TopInfoUI,
  ManImgUI,
  BackLinkUI,
} from "./styles";
import Footer from "../../shared_components/Footer";
import PaymentStatus from "../Pay/PaymentStatus";
import OrderPrice from "../../shared_components/OrderPrice";
import { useEffect } from "react";
import Loader from "../../shared_components/Loader";
import manSrc from "./assets/man.webp";

const PayFailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");
  const { data: orderData, isLoading } = useOrderDetailQuery(orderId);

  useEffect(() => {
    if (!orderId) {
      navigate("/", {
        replace: true,
      });
      alert("정상적인 접근이 아님");
    }
    if (!orderData) return;
    if (orderData.payment) {
      navigate(`/order/${orderId}`, {
        replace: true,
      });
    }
  }, [orderData]);

  const rePay = () => {
    if (paymentKey && amount) {
      navigate(
        `/pay?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}`,
        {
          replace: true,
        }
      );
    } else {
      navigate("/create-order", {
        replace: true,
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PageUI>
        <Header isFixed />
        <FlexWrapperUI>
          <TopInfoUI>
            <ManImgUI src={manSrc} />
            <PaymentStatus status={null} />
          </TopInfoUI>
          <ColUI gap="14px">
            <SectionDscrptTxtUI>결제정보</SectionDscrptTxtUI>
            <OrderPrice
              orderProductsPrice={orderData.price.orderProducts}
              shippingPrice={orderData.price.shipping}
              payment={orderData?.payment}
            />
            <ActionBtnUI onClick={rePay}>다시 결제</ActionBtnUI>
            <BackLinkUI to="/">돌아가기</BackLinkUI>
          </ColUI>
        </FlexWrapperUI>
      </PageUI>
      <Footer />
    </>
  );
};

export default PayFailPage;
