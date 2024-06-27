import RudImage from "../../../shared_components/RudImage";
import {
  ProductNameUI,
  ProductPriceUI,
  ProductUI,
  OptionsSectionUI,
  QuantityTextUI,
  FlexColUI,
  ProductImgUI,
} from "./styles";

const Product = ({ thumnail, name, price, quantity, options }) => {
  return (
    <ProductUI>
      <RudImage ImgUI={ProductImgUI} src={thumnail} />
      <FlexColUI gap="9px">
        <FlexColUI gap="5px">
          <ProductNameUI>{name}</ProductNameUI>
          <ProductPriceUI>₩ {price.toLocaleString("ko-KR")}</ProductPriceUI>
        </FlexColUI>
        {options?.length !== 0 && (
          <OptionsSectionUI>
            {options?.map((option) => (
              <p key={option?.id}>
                {option?.groupName}: {option?.name}
              </p>
            ))}
          </OptionsSectionUI>
        )}
        <QuantityTextUI>{quantity}개</QuantityTextUI>
      </FlexColUI>
    </ProductUI>
  );
};

export default Product;
