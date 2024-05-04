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
          <BuyNowButtonUI onClick={onClick}>Buy Now</BuyNowButtonUI>
        </SubmitUI>
      </SubmitSectionUI>
      <Spacer />
    </>
  );
};

export default Submit;
