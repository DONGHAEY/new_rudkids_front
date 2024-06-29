import {
  ColUI,
  ColumnTextUI,
  ColumnValueTextUI,
  OneDPTxtUI,
  PriceUI,
  TotalPriceTextUI,
  TotalTextUI,
  TxtWrapperUI,
} from "./styles";

const Price = ({ totalProductsPrice, totalShippingPrice }) => {
  return (
    <PriceUI>
      <ColUI>
        <ColUI>
          <TxtWrapperUI>
            <ColumnTextUI>총 상품금액</ColumnTextUI>
            <ColumnValueTextUI>
              ₩ {Number(totalProductsPrice).toLocaleString("ko-kr")}
            </ColumnValueTextUI>
          </TxtWrapperUI>
          <TxtWrapperUI>
            <ColumnTextUI>배송비</ColumnTextUI>
            <ColumnValueTextUI color={"black"}>
              ₩ {Number(totalShippingPrice).toLocaleString("ko-kr")}
              {totalShippingPrice == "1" && (
                <OneDPTxtUI>&emsp;1원 배송</OneDPTxtUI>
              )}
            </ColumnValueTextUI>
          </TxtWrapperUI>
        </ColUI>
        <TxtWrapperUI marginTop="10%">
          <TotalTextUI>Total</TotalTextUI>
          <TotalPriceTextUI>
            ₩{" "}
            {Number(totalProductsPrice + totalShippingPrice).toLocaleString(
              "ko-kr"
            )}
          </TotalPriceTextUI>
        </TxtWrapperUI>
      </ColUI>
    </PriceUI>
  );
};

export default Price;
