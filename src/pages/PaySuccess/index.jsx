//

import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { createPayment } from "../../apis/payment/createPayment";

const PaySuccessPage = () => {
  //
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");

  useEffect(() => {
    if (!orderId || !paymentKey) return;
    (async () => {
      try {
        await createPayment({
          orderId,
          paymentKey,
        });
        window.location.href.replace(
          `https://www.rud.kids/orderDetail/${orderId}`
        );
      } catch (e) {
        alert("결제 승인에 실패했습니다ㅠㅠ");
        window.location.href.replace(`https://www.rud.kids/list`);
      }
    })();
  }, [orderId, paymentKey]);

  return (
    <div>
      <p
        style={{
          color: "white",
        }}
      >
        !!!{orderId} toss 결제 승인중!! 로딩중..
      </p>
    </div>
  );
};

export default PaySuccessPage;
