import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  OrderProductListUI,
  SpreadButtonUI,
  SpreadBtnWrapperUI,
  ButtonTxtUI,
  ButtonTxt2UI,
} from "./styles";
import OrderProduct from "./OrderProduct";
import { useState } from "react";

const OrderProductList = ({ orderProducts }) => {
  const [isSpread, setIsSperead] = useState(false);

  const showBtn = orderProducts?.length > 1;

  const d = orderProducts.map((orderProduct, idx) => {
    if (!isSpread) {
      if (idx >= 1) {
        return null;
      }
    }
    return <OrderProduct key={idx} orderProduct={orderProduct} />;
  });

  return (
    <OrderProductListUI>
      {d}
      {showBtn && (
        <SpreadBtnWrapperUI>
          <SpreadButtonUI
            $isSpread={isSpread}
            onClick={() => setIsSperead(!isSpread)}
          >
            <ButtonTxtUI fontSize="14px">
              총 {orderProducts?.length}건
            </ButtonTxtUI>
            <ButtonTxt2UI fontSize="13px">
              {isSpread ? "주문 접기" : "주문 펼쳐보기"}
            </ButtonTxt2UI>
            {isSpread ? <FaChevronUp /> : <FaChevronDown />}
          </SpreadButtonUI>
        </SpreadBtnWrapperUI>
      )}
    </OrderProductListUI>
  );
};

export default OrderProductList;
