import {
  ColUI,
  OrderPriceUI,
  PriceNameTxtUI,
  PriceRowUI,
  PriceTxtUI,
  TotalPriceTxtUI,
} from "./styles";

export const OrderPrice = ({
  orderProductsPrice,
  shippingPrice,
  orderPrice,
}) => {
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
          <PriceNameTxtUI>배송금액</PriceNameTxtUI>
          <PriceTxtUI>
            ₩ {Number(shippingPrice).toLocaleString("ko-KR")}
          </PriceTxtUI>
        </PriceRowUI>
      </ColUI>
      <PriceRowUI>
        <PriceNameTxtUI fontSize="14px" color="#0075FF">
          결제 금액
        </PriceNameTxtUI>
        <TotalPriceTxtUI>
          ₩ {Number(orderPrice).toLocaleString("ko-KR")}
        </TotalPriceTxtUI>
      </PriceRowUI>
    </OrderPriceUI>
  );
};
export default OrderPrice;
