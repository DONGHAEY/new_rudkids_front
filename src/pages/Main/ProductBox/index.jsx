import { useNavigate } from "react-router-dom";
import {
  ProductBoxUI,
  ProductImgWrapperUI,
  ProductInfoWrapperUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
} from "./styles";

const ProductBox = ({ thumnail, name, price }) => {
  const navigate = useNavigate();
  return (
    <ProductBoxUI
      onClick={() => {
        navigate(`/product/${name}`);
      }}
    >
      <ProductImgWrapperUI>
        <img src={thumnail} width="100%" />
      </ProductImgWrapperUI>
      <ProductInfoWrapperUI>
        <ProductNameTxtUI>{name}</ProductNameTxtUI>
        <ProductPriceTxtUI>{price}</ProductPriceTxtUI>
      </ProductInfoWrapperUI>
    </ProductBoxUI>
  );
};

export default ProductBox;
