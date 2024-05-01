import PaymentsWidget from "./PaymentsWidget";
import { useUserQuery } from "../../queries/user";
import { useOrderQuery } from "../../queries/order";
import { useParams } from "react-router-dom";
import { ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { useFetchPaymentWidget } from "../../hooks/usePaymentWidget";

const PayPage = ({ routeInfo }) => {
  const params = useParams();
  const orderId = params[routeInfo.paramKeys[0]];

  const { data: orderData } = useOrderQuery(orderId);
  const { data: userData } = useUserQuery();

  const [paymentWidget] = useFetchPaymentWidget({
    widgetClientKey: "test_gck_oEjb0gm23PO0JJ6M9d548pGwBJn5",
    customerKey: userData?.id ?? ANONYMOUS,
  });

  const obj = {
    orderId: orderData?.id,
    orderName: `${orderData?.orderedProducts[0].name}외 ${orderData?.orderedProducts?.length}건`,
    customerName: orderData?.orderer.name,
    amount: orderData?.totalPrice,
    successUrl: `${window.location.origin}/order/${orderData?.id}`,
    failUrl: `${window.location.origin}/fail`,
  };

  const onPayClick = async () => {
    try {
      await paymentWidget?.requestPayment(obj);
    } catch (error) {
      console.log(error);
    }
  };

  if (!orderData || !paymentWidget) {
    return null;
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100% - 30px)",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "30px",
      }}
    >
      <p>{obj.orderName}</p>
      <p>총 {obj.amount.toLocaleString("ko-KR")}원 결제</p>
      <PaymentsWidget
        paymentWidget={paymentWidget}
        totalPrice={orderData.totalPrice}
      />
      <button onClick={onPayClick}>다음으로</button>
    </div>
  );
};

export default PayPage;
