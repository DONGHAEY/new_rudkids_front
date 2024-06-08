import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCreatePaymentMutation from "../../mutations/payment/useCreatePaymentMutation";
import useOrderDetailQuery from "../../queries/order/useOrderDetailQuery";
import Loader from "../../shared_components/Loader";

const PayPage = () => {
  const navigate = useNavigate();

  const createPaymentMutation = useCreatePaymentMutation();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");
  //
  const { data: orderData } = useOrderDetailQuery(orderId);

  useEffect(() => {
    if (!orderId || !paymentKey || !amount) {
      alert("정상적인 접근이 아님");
      navigate("/", {
        replace: "/",
      });
    }
    (async () => {
      await createPaymentMutation.mutateAsync(
        {
          orderId,
          paymentKey,
          amount: Number(amount),
        },
        {
          onError: (e) => {
            navigate(`/pay-fail${window.location.search}`);
            alert(e?.response?.data?.message ?? "결제에 실패했습니다");
          },
          onSuccess: () => {
            navigate(`/order/${orderId}`, {
              replace: true,
            });
          },
        }
      );
    })();
  }, [orderId, paymentKey, amount]);

  if (createPaymentMutation.isLoading || !orderData) {
    return <Loader />;
  }

  return null;
};

export default PayPage;
