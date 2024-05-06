//

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCreatePaymentMutation } from "../../queries/payment";

const PaySuccessPage = () => {
  const createPaymentMutation = useCreatePaymentMutation();

  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  //
  useEffect(() => {
    if (!orderId || !paymentKey) return;
    (async () => {
      await createPaymentMutation.mutateAsync(
        {
          orderId,
          paymentKey,
        },
        {
          onSuccess: () => {
            window.location.href = `/orderDetail/${orderId}`;
          },
          onError: (e) => {
            window.location.href = `/list`;
            console.log(e, "에러가 왜 안뜰까??? 미치겠네..");
            alert(e?.response?.data?.message ?? "결제에 실패했습니다");
          },
        }
      );
    })();
  }, [orderId, paymentKey]);

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
