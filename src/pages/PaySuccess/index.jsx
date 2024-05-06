//

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCreatePaymentMutation } from "../../queries/payment";

const PaySuccessPage = () => {
  const createPaymentMutation = useCreatePaymentMutation();

  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");
  //
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
          onSuccess: () => {
            window.location.href = `/orderDetail/${orderId}`;
          },
          onError: (e) => {
            alert(e?.response?.data?.message ?? "결제에 실패했습니다");
            window.location.href = `/list`;
          },
        }
      );
    })();
  }, [orderId, paymentKey, amount]);

  return (
    <div>
      <p
        style={{
          color: "white",
        }}
      >
        !!!{orderId} toss 결제 승인중!! 로딩중..!
      </p>
    </div>
  );
};

export default PaySuccessPage;
