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
      <SubmitSectionUI>
        <SubmitUI>
          <TotalPriceWrapperUI>
            <TotalTextUI>Total</TotalTextUI>
            <TotalPriceTextUI>₩ {totalPrice}</TotalPriceTextUI>
          </TotalPriceWrapperUI>
          <BuyNowButtonUI onClick={onClick}>BUY NOW</BuyNowButtonUI>
        </SubmitUI>
      </SubmitSectionUI>
      <Spacer />
    </>
  );
};

export default Submit;
