import {
  ProductHangedString,
  ProductImgWrapperUI,
  ProductTagString,
  ProductTagUI,
  ProductUI,
} from "./styles";
import BarcodeImgSrc from "./assets/barcord.png";

const Product = ({ productData, selected }) => {
  return (
    <ProductUI>
      <ProductTagUI $selected={selected}>
        <p>{productData?.name}</p>
        <img src={BarcodeImgSrc} width="76px" height="19px" />
      </ProductTagUI>
      <ProductTagString />
      <ProductImgWrapperUI $selected={selected}>
        <ProductHangedString />
        <img width="100%" src={productData?.imageUrl} />
      </ProductImgWrapperUI>
    </ProductUI>
  );
};

export default Product;
