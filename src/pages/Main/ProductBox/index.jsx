import {
  ProductBoxUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductInfoWrapperUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
} from "./styles";

const ProductBox = ({ thumnail, name, price }) => {
  return (
    <ProductBoxUI to={`/product/${name}`}>
      <ProductImgWrapperUI>
        <ProductImgUI src={thumnail} />
      </ProductImgWrapperUI>
      <ProductInfoWrapperUI>
        <ProductNameTxtUI>{name}</ProductNameTxtUI>
        <ProductPriceTxtUI>{price}</ProductPriceTxtUI>
      </ProductInfoWrapperUI>
    </ProductBoxUI>
  );
};

export default ProductBox;
