import {
  BuyNowButtonUI,
  Spacer,
  SubmitSectionUI,
  SubmitUI,
  TotalPriceTextUI,
  TotalPriceWrapperUI,
  TotalTextUI,
} from "./styles";

const Submit = ({ totalPrice, onClick }) => {
  return (
    <>
      <SubmitSectionUI
        style={{
          pointerEvents: "none",
        }}
        draggable={true}
      >
        <SubmitUI>
          <TotalPriceWrapperUI>
            <TotalTextUI>Total</TotalTextUI>
            <TotalPriceTextUI>₩ {totalPrice}</TotalPriceTextUI>
          </TotalPriceWrapperUI>
          <BuyNowButtonUI
            style={{
              pointerEvents: "auto",
            }}
            onClick={onClick}
          >
            Buy Now
          </BuyNowButtonUI>
        </SubmitUI>
      </SubmitSectionUI>
      <Spacer />
    </>
  );
};

export default Submit;
