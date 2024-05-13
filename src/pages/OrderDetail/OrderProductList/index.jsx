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
  return (
    <OrderProductListUI>
      {orderProducts?.map((orderProduct, idx) => {
        if (!isSpread && idx >= 1) {
          return null;
        }
        return (
          <OrderProduct
            key={orderProduct.productId}
            orderProduct={orderProduct}
          />
        );
      })}
      <SpreadBtnWrapperUI>
        <SpreadButtonUI onClick={() => setIsSperead(!isSpread)}>
          {!isSpread && (
            <ButtonTxtUI fontSize="14px">
              총 {orderProducts?.length}건
            </ButtonTxtUI>
          )}
          <ButtonTxt2UI fontSize="13px">
            {isSpread ? "접기" : "주문 펼쳐보기"}
          </ButtonTxt2UI>
          {isSpread ? <FaChevronUp /> : <FaChevronDown />}
        </SpreadButtonUI>
      </SpreadBtnWrapperUI>
    </OrderProductListUI>
  );
};

export default OrderProductList;
