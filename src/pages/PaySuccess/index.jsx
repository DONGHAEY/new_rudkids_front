//

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PaySuccessPage = ({ routeInfo }) => {
  const params = useParams();
  const orderId = params[routeInfo.paramKeys[0]];
  //

  useEffect(() => {
    if (!orderId) return;
    //결제 승인 요청

    //
  }, [orderId]);

  return (
    <div>
      <p
        style={{
          color: "white",
        }}
      >
        {orderId} 결제 승인
      </p>
    </div>
  );
};

export default PaySuccessPage;
