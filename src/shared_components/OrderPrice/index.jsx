import {
  ColUI,
  FreeShippingPriceUI,
  FreeTxt1UI,
  FreeTxt2UI,
  OrderPriceUI,
  PriceNameTxtUI,
  PriceRowUI,
  PriceTxtUI,
  TotalPriceTxtUI,
} from "./styles";

export const OrderPrice = ({ orderProductsPrice, shippingPrice, payment }) => {
  return (
    <OrderPriceUI>
      <ColUI gap="10px">
        <PriceRowUI>
          <PriceNameTxtUI>총 상품금액</PriceNameTxtUI>
          <PriceTxtUI>
            ₩ {Number(orderProductsPrice).toLocaleString("ko-KR")}
          </PriceTxtUI>
        </PriceRowUI>
        <PriceRowUI>
          <PriceNameTxtUI>배송비</PriceNameTxtUI>
          {shippingPrice !== 0 && (
            <PriceTxtUI>
              ₩ {Number(shippingPrice).toLocaleString("ko-KR")}
            </PriceTxtUI>
          )}
          {shippingPrice === 0 && (
            <FreeShippingPriceUI>
              <FreeTxt1UI>쿠폰 적용</FreeTxt1UI>
              <FreeTxt2UI>Free</FreeTxt2UI>
            </FreeShippingPriceUI>
          )}
        </PriceRowUI>
      </ColUI>
      <PriceRowUI>
        <PriceNameTxtUI fontSize="14px" color={"#0075FF"}>
          결제 금액
        </PriceNameTxtUI>
        <TotalPriceTxtUI color={payment ? "#0075FF" : "#FF0000"}>
          {payment
            ? `₩ ${Number(payment.amount).toLocaleString("ko-KR")}`
            : "결제 안됨"}
        </TotalPriceTxtUI>
      </PriceRowUI>
    </OrderPriceUI>
  );
};
export default OrderPrice;
