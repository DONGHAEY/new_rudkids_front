import { useNavigate } from "react-router-dom";
import {
  IndexTxtUI,
  RowBetweenUI,
  ProductNameTxtUI,
  ProductUI,
  DescriptTxtUI,
} from "./styles";

const Product = ({ productData, selected, index }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(`/product/${productData?.name}`);
  };

  return (
    <ProductUI onClick={clickHandler}>
      <RowBetweenUI>
        <ProductNameTxtUI $selected={selected}>
          {productData.name}
        </ProductNameTxtUI>
        <IndexTxtUI>0{Number(index)}</IndexTxtUI>
      </RowBetweenUI>
      <img height={"189px"} src={productData?.components[0]?.imageUrl} />
      <RowBetweenUI>
        <DescriptTxtUI>
          Rudkids {productData?.components[0]?.name}
        </DescriptTxtUI>
        <DescriptTxtUI>Limited</DescriptTxtUI>
      </RowBetweenUI>
    </ProductUI>
  );
};

export default Product;
