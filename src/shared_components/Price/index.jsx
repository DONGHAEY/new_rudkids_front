import {
  ColumnTextUI,
  ColumnValueTextUI,
  OneDPTxtUI,
  PriceUI,
  SpaceBetweenUI,
  TotalPriceTextUI,
  TotalTextUI,
} from "./styles";

const Price = ({ totalProductsPrice, totalShippingPrice }) => {
  return (
    <PriceUI>
      <SpaceBetweenUI $flexDirection="column" gap="23px">
        <SpaceBetweenUI $flexDirection="column" gap="10px">
          <SpaceBetweenUI>
            <ColumnTextUI>총 상품금액</ColumnTextUI>
            <ColumnValueTextUI>
              ₩ {Number(totalProductsPrice).toLocaleString("ko-kr")}
            </ColumnValueTextUI>
          </SpaceBetweenUI>
          <SpaceBetweenUI>
            <ColumnTextUI>배송비</ColumnTextUI>
            <ColumnValueTextUI color={"black"}>
              ₩ {Number(totalShippingPrice).toLocaleString("ko-kr")}
              {totalShippingPrice == "1" && (
                <OneDPTxtUI>&emsp;1원 배송</OneDPTxtUI>
              )}
            </ColumnValueTextUI>
          </SpaceBetweenUI>
        </SpaceBetweenUI>
        <SpaceBetweenUI>
          <TotalTextUI>Total</TotalTextUI>
          <TotalPriceTextUI>
            ₩{" "}
            {Number(totalProductsPrice + totalShippingPrice).toLocaleString(
              "ko-kr"
            )}
          </TotalPriceTextUI>
        </SpaceBetweenUI>
      </SpaceBetweenUI>
    </PriceUI>
  );
};

export default Price;
