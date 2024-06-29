import { useMemo } from "react";
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
  const optionsTxt = useMemo(() => {
    let optionsTxt = "";
    options?.forEach((option, idx) => {
      const isLast = idx === options.length - 1;
      optionsTxt += `${option.groupName} : ${option.name}${
        !isLast ? "&ensp;" : ""
      }`;
    });
    return optionsTxt;
  }, [options]);

  return (
    <ProductUI>
      <RudImage ImgUI={ProductImgUI} src={thumnail} />
      <FlexColUI>
        <ProductNameUI>{name}</ProductNameUI>
        <ProductPriceUI>₩ {price.toLocaleString("ko-KR")}</ProductPriceUI>
        {optionsTxt && (
          <OptionsSectionUI
            dangerouslySetInnerHTML={{
              __html: optionsTxt,
            }}
          />
        )}
        <QuantityTextUI>{quantity}개</QuantityTextUI>
      </FlexColUI>
    </ProductUI>
  );
};

export default Product;
